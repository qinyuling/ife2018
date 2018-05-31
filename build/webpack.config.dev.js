const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, "../dist"),
		compress: true,
		port: 3000
	}
});