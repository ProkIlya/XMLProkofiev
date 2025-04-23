const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example-nestjs/public'), // Убрали ../
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'index.html',
          to: 'example-nestjs/public/index.html' // Убрали ../
        },
        { 
          from: 'node_modules/bootstrap/dist',
          to: 'example-nestjs/public/bootstrap' // Убрали ../
        }
      ]
    })
  ],
  mode: 'production'
};