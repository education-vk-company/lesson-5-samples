# Создаем index файл
```bash
mkdir src
cd src
touch index.html
```

```html
<!DOCTYPE html>
<html>
	<head>
		<title>The Minimal React Webpack Babel Setup</title>
	</head>
	<body>
		<div id="app"></div>
	</body>
</html>
```

# Устанавливаем webpack
`npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin`

`touch webpack.config.js`

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sourceRoot = path.resolve(__dirname, 'src');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	devServer: {
		contentBase: './dist'
	}
};


```
"scripts": {
	"start": "npm run build && npm run serve",
	"serve": "webpack-dev-server --config ./webpack.config.js --mode development",
	"build": "webpack --config ./webpack.config.js --mode development"
},
```

```bash
touch index.js
```

`console.log('Hello, world!');`

# Устанавливаем babel

`npm install --save-dev @babel/core @babel/preset-env babel-loader @babel/preset-react`

```
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
```

`touch .babelrc`

```
{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	]
}
```

# Устанавливаем React

`npm install --save react react-dom`

```
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello, world!';

ReactDOM.render(
	<div>{ title }</div>,
	document.getElementById('app')
);

```