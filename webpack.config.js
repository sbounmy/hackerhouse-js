/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'widget.js',
    library: ['MyLib'],
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  // output: {
  //   path: path.resolve('dist'),
  //   filename: 'index_bundle.js'
  // },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
}