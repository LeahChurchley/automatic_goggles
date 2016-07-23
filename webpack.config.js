var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/components/client.js',
  output: {filename: 'public/static/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|.\/src\/app)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
