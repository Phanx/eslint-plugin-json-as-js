Example config file:

```js
module.exports = {
	ignorePatterns: ["./*.json"],
	overrides: [
		{
			files: ["*.json"],
			plugins: ["json-as-js"],
			processor: "json-as-js/.json",
		}
	],
	root: true,
	rules: {
		"json-as-js/no-empty-strings": "error",
		"sort-keys": "error",
	},
}
```