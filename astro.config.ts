import { defineConfig } from "astro/config";

import compress from "astro-compress";
import mdx from '@astrojs/mdx';
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	adapter: netlify(),
	integrations: [
		mdx(),
		compress({
			css: false,
			html: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				keepClosingSlash: false,
			},
			svg: false, // Reenable once https://github.com/astro-community/astro-compress/issues/39 and greencutie.svg can be ignored
		}),
		sitemap(),
	],
	output: `server`,
	site: `https://geneticure.com/`,
});
