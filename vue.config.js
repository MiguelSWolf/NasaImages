const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
	transpileDependencies: ["@tanstack/vue-query", "@tanstack/query-core"],
	chainWebpack: (config) => {
		config.module
			.rule("js")
			.test(/\.m?js$/)
			.include.add(/node_modules\/@tanstack/)
			.end()
			.use("babel-loader")
			.loader("babel-loader")
			.tap((options) => {
				return {
					...options,
					plugins: [
						"@babel/plugin-transform-private-methods",
						"@babel/plugin-transform-class-properties",
					],
				};
			});
	},
});
