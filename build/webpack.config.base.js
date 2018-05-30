const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},{
			test: /\.js$/,
			use: 'babel-loader',
			include: path.resolve(__dirname, '../'),
			exclude: /node_modules/
		}
		]
	},
	plugins: [
		new cleanWebpackPlugin(['dist']),
		new htmlWebpackPlugin({
			title: '首页'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
	}
};