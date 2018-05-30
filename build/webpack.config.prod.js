const webpack = require('webpack');
const merge = require('webpack-merge');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
	devtool: 'source-map',
	plugins: [
		new uglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});