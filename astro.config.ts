import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

export default defineConfig({
	adapter: netlify(),
	integrations: [
		mdx(),
		compress({
			CSS: false,
			HTML: {
				"html-minifier-terser": {
					collapseWhitespace: true,
					conservativeCollapse: true,
					keepClosingSlash: false,
				},
			},
			SVG: false, // Reenable once https://github.com/astro-community/astro-compress/issues/39 and greencutie.svg can be ignored
		}),
		sitemap(),
	],
	output: `server`,
	redirects: {
		'/file/geneticure_htn_pgx_brochure.pdf': `/brochure.pdf`,
		'/file/geneticure_htn_pgx_report.pdf': `/report.pdf`,
	},
	site: `https://geneticure.com/`,
});
