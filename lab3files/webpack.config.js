const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './main.js', 
  output: {
    path: path.resolve(__dirname, '../Lab4/example-nestjs/public'), // Путь относительно lab3files
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'index.html', 
          to: path.resolve(__dirname, '../Lab4/example-nestjs/public/index.html') // Путь до lab4
        }
      ]
    })
  ],
  mode: 'development' // или 'production' в production-среде
};

