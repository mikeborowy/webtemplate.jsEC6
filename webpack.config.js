let webpack = require("webpack");
let path = require("path");

module.exports = {
	entry: ["babel-polyfill",'./src/app.js'],
	output: {
		path: __dirname + "/",
		publicPath: "/",
		filename: "bundle.js",
	},
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		inline: true,
		contentBase: './',
		port: 3000
	},
	
	module: {
		loaders: [{
				test: /\.js$/,
				include: path.join(__dirname, 'src'), 
				exclude: /(node_modules)/,
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			}
		]
	}
};