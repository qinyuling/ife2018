const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		hostname: '0.0.0.0',
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		new cleanWebpackPlugin(['dist']),
		new htmlWebpackPlugin({
			title: 'Output Management'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};