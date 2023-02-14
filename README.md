Example config file:

```js
module.exports = {
	overrides: [{
		files: ["**/locales/en-US/*.json"],
		plugins: ["json-as-js"],
		processor: "json-as-js/.json",
		rules: {
			"json-as-js/no-empty-strings": "error",
			"sort-keys": "off",
		},
	}],
	root: true,
	rules: {
		"sort-keys": "error",
	},
}
```
