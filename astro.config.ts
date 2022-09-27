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
		}),
	],
});
