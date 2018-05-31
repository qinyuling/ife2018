const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
	mode: 'development',
	devtool: '#eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, "../dist"),
		hot: true,
		compress: true,
		port: 3000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].js',
		path: '/'
	}
});