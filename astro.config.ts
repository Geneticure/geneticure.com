import { defineConfig } from "astro/config";

import compress from "astro-compress";
import mdx from '@astrojs/mdx';

export default defineConfig({
	integrations: [
		mdx(),
		compress({
			html: {
				keepClosingSlash: false,
				removeTagWhitespace: false,
				sortAttributes: false,
			},
			svg: false, // Reenable once https://github.com/astro-community/astro-compress/issues/39 and greencutie.svg can be ignored
		}),
	],
});
