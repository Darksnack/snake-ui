/*
 * @Author:
 * @Date: 2023-09-20 13:37:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-20 14:18:22
 * @Description: 请填写简介
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:vue/vue3-essential", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint"],
	rules: {},
};
