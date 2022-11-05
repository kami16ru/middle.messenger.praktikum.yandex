const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: false,
    port: 3000,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
})
