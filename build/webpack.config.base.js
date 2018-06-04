const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		//app: './src/index.js' 相对于执行webpack的路径
		app: path.resolve(__dirname, '../src/index.js')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.js$/,
			use: 'babel-loader',
			include: path.resolve(__dirname, '../src/'),
			exclude: /node_modules/
		}, {
			test: /\.san$/,
			loader: 'san-loader',
			include: path.resolve(__dirname, '../src/')
		}]
	},
	plugins: [
		new cleanWebpackPlugin(['dist']),
		new htmlWebpackPlugin({
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: path.resolve(__dirname, '../src/index.html'),
			inject: true
		})
	],
	resolve: {
		//告诉 webpack 解析模块时应该搜索的目录
		extensions: [".js", ".json", ".san"],
		alias: {
			san: process.env.NODE_ENV === 'production' ?
				'san/dist/san.js' : 'san/dist/san.dev.js'
		}
	}
};