# Разворачиваем окружение для разработки React приложений с Babel за `5 сек`
### 1. Создаем папку, где будет храниться наш проект
```bash
mkdir frontend-react-app; cd $_
```

### 2. Создаем `package.json`
```bash
npm init
```
### 3. Создаем `index` файл

```bash
mkdir src; cd $_
touch index.html
```
Вставляем в него такое простое содержимое, где будет рисоваться наше React приложение.
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

### 4. Устанавливаем `webpack`, `webpack-dev-server`, `cli` и `плагин`
```bash
npm install --save-dev webpack webpack-dev-server webpack-cli html-webpack-plugin
```
### 5. Создаем конфигурационный файл для `webpack`
```bash
touch webpack.config.js
```
Настраиваем `webpack` для сборки `js`, `inline` тега `script` в `html` и `dev-server` для того, чтобы наше приложение можно было просто разрабатывать в браузере.
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
	},
	devtool: 'inline-source-map'
};
```
### 6. Добавляем npm скрипты в `package.json`
```
{
    ...
    "scripts": {
    	"start": "npm run build && npm run serve",
    	"serve": "webpack-dev-server --config ./webpack.config.js --mode development",
    	"build": "webpack --config ./webpack.config.js --mode development"
    },
    ...
}
```
### 7. Создаем наш первый `js` файл
```bash
touch index.js
```
Просто выведем что-нибудь в консоль.
`console.log('Hello, world!');`

#### Выполняем `npm start` и смотрим на результат.
------
### 8. Устанавливаем `babel` и нужные `presets` для `React`

```bash
npm install --save-dev @babel/core @babel/preset-env babel-loader @babel/preset-react
```
Добавляем в `webpack.config.js` эту конструкцию, которая скажет `babel`, что надо делать с js файлами.
```
{
    ...
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
...
}
```
Создадим конфигурационный файл для `babel`.
```bash
touch .babelrc
```
Указываем в `.babelrc` профили.
```
{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	]
}
```

### 9. Устанавливаем React

```bash
npm install --save react react-dom
```
### 10. Меняем содержимое `index.js` на простейшее React приложение
```
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello, world!';

ReactDOM.render(
	<div>{ title }</div>,
	document.getElementById('app')
);
```
### Запускаем среду и радуемся
```bash
npm start
```
Замечаем, что помимо сборки, наше приложение запустилось на `localhost`, а любое изменение файлов мгновенно отображается в браузере.
