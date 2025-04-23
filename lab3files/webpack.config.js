const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// Абсолютный путь до целевой папки public в Lab4
const publicPath = path.resolve('C:/Users/123/ПСП/-5-41-/example-nestjs/public');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: publicPath, // Путь к папке public в Lab4
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: 'index.html',
          to: path.join(publicPath, 'index.html')
        },
        { 
          from: 'node_modules/bootstrap/dist',
          to: path.join(publicPath, 'bootstrap')
        }
      ]
    })
  ],
  mode: 'production'
};