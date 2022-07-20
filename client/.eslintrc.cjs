/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	reportUnusedDisableDirectives: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended",
		"@vue/eslint-config-prettier",
	],
	ignorePatterns: [
		"*.min.*",
		"*.d.ts",
		"dist",
		"public",
		"temp",
		"pnpm-lock.yaml",
		"!.github",
		"!.vscode",
	],
	plugins: ["simple-import-sort", "import", "unused-imports", "unicorn", "tailwindcss"],
	overrides: [
		{
			files: ["src/pages/*.vue"],
			rules: {
				"vue/multi-word-component-names": "off",
			},
		},
	],
	rules: {
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{
				vars: "all",
				varsIgnorePattern: "^_",
				args: "after-used",
				argsIgnorePattern: "^_",
			},
		],
		// unicorns
		// Pass error message when throwing errors
		"unicorn/error-message": "error",
		// Uppercase regex escapes
		"unicorn/escape-case": "error",
		// Array.isArray instead of instanceof
		"unicorn/no-instanceof-array": "error",
		// Prevent deprecated `new Buffer()`
		"unicorn/no-new-buffer": "error",
		// Keep regex literals safe!
		"unicorn/no-unsafe-regex": "off",
		// Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
		"unicorn/number-literal-case": "error",
		// includes over indexOf when checking for existence
		"unicorn/prefer-includes": "error",
		// String methods startsWith/endsWith instead of more complicated stuff
		"unicorn/prefer-starts-ends-with": "error",
		// textContent instead of innerText
		"unicorn/prefer-text-content": "error",
		// Enforce throwing type error when throwing error while checking typeof
		"unicorn/prefer-type-error": "error",
		// Use new when throwing error
		"unicorn/throw-new-error": "error",

		// Vue
		"vue/component-tags-order": [
			"error",
			{
				order: ["script", "template", "style"],
			},
		],
		"vue/block-tag-newline": [
			"error",
			{
				singleline: "always",
				multiline: "always",
			},
		],
		"vue/component-name-in-template-casing": ["error", "PascalCase"],
		"vue/component-options-name-casing": ["error", "PascalCase"],
		"vue/custom-event-name-casing": ["error", "camelCase"],
		"vue/define-macros-order": [
			"error",
			{
				order: ["defineProps", "defineEmits"],
			},
		],
		"vue/html-comment-content-spacing": [
			"error",
			"always",
			{
				exceptions: ["-"],
			},
		],
		"vue/no-restricted-v-bind": ["error", "/^v-/"],
		"vue/no-useless-v-bind": "error",
		"vue/no-v-text-v-html-on-component": "error",
		"vue/padding-line-between-blocks": ["error", "always"],
		"vue/prefer-separate-static-class": "error",

		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",

		// Tailwind
		"tailwindcss/classnames-order": "error",
		"tailwindcss/enforces-negative-arbitrary-values": "error",
		"tailwindcss/enforces-shorthand": "error",
		"tailwindcss/migration-from-tailwind-2": "off",
		"tailwindcss/no-arbitrary-value": "off",
		"tailwindcss/no-custom-classname": "off",
		"tailwindcss/no-contradicting-classname": "error",
	},
};
