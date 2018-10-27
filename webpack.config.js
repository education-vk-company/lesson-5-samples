const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourceRoot = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
	entry: `${ sourceRoot }/index.js`,
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: dist,
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: `${ sourceRoot }/index.html`
		})
	],
	devServer: {
		contentBase: './dist'
	}
};
