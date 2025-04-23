const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './lab3files/src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../Lab4/example-nestjs/public'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'lab3files/index.html', 
          to: '../Lab4/example-nestjs/public/index.html' 
        }
      ]
    })
  ],
  mode: 'production'
};