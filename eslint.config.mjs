import eslint from '@eslint/js';
// import eslintPluginAstro from 'eslint-plugin-astro';
import tsESLint from 'typescript-eslint';

export default tsESLint.config(
	{
		ignores: [
			`*.astro`,
			`!**/.*.js*`,
			`.astro`,
			`.netlify`,
			`dist`,
			`node_modules/**`,
		],
	},

	eslint.configs.recommended,
	tsESLint.configs.recommended,

	{
		languageOptions: {
			globals: {
				"Astro": `readonly`,
			},
			parser: tsESLint.parser,
		},

		plugins: {
			"@typescript-eslint": tsESLint.plugin,
		},

		rules: {
			// "@typescript-eslint/member-delimiter-style": ["warn",
			// 	{
			// 		"singleline": {
			// 			"requireLast": true
			// 		}
			// 	}
			// ],
			// "@typescript-eslint/semi": ["warn", "always"],
			"comma-dangle": [`warn`, `always-multiline`],
			"curly": [`warn`, `all`],
			"indent": [`warn`, `tab`, {
				"SwitchCase": 1,
			}],
			"key-spacing": [
				`warn`,
				{
					afterColon: true,
					beforeColon: false,
					mode: `strict`,
				},
			],
			"object-curly-spacing": [`warn`, `always`],
			"quote-props": [`warn`, `consistent`],
			"quotes": [`warn`, `backtick`],
			"semi": `off`,
			"sort-imports": [`warn`, {
				"allowSeparatedGroups": true,
			}],
			"sort-keys": [
				`warn`,
				`asc`,
				{
					"allowLineSeparatedGroups": true,
				},
			],
			"space-before-blocks": [`warn`, `always`],
			"space-before-function-paren": [`warn`, `never`],
			"space-infix-ops": [`warn`],
			// "typescript-sort-keys/interface": "warn",
			// "typescript-sort-keys/string-enum": "warn"
		},
	},

	// {
	// 	files: [`*.astro`],
	// 	...eslintPluginAstro.configs.recommended,
	// },
);

