/**
 * @fileoverview Process JSON files with ESLint.
 * @author nobody
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports.processors = {
	".json": {
		preprocess: function(text, filename) {
			const code = "module.exports = " + text;
			return [
				{ text: code, filename: "0.js" },
			];
		},
		postprocess: function(messages, filename) {
			return [].concat(...messages);
		},
		supportsAutofix: false,
	}
};

module.exports.rules = {
	"no-empty-strings": {
		meta: {
			type: "problem",
			schema: [],
			docs: {
				description: "Requires JSON string values to be non-empty."
			},
			messages: {
				emptyString: "Unexpected empty string."
			},
		},
		create: (context) => {
			return {
				Property(node) {
					if ("value" in node
					&& typeof node.value === "object"
					&& "value" in node.value
					&& typeof node.value.value === "string"
					&& node.value.value.trim().length === 0) {
						context.report({
							node: node,
							messageId: "emptyString",
						})
					}
				}
			}
		},
	}
};
