const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './main.js', // Точка входа — ваш main.js
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, '../example-nestjs/public'), // Куда сохранять бандл
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'index.html', // Копировать index.html
          to: '../example-nestjs/public/index.html' 
        },
        { 
          from: 'node_modules/bootstrap/dist', // Копировать Bootstrap
          to: '../example-nestjs/public/bootstrap' 
        }
      ]
    })
  ],
  mode: 'production' // Режим сборки
};