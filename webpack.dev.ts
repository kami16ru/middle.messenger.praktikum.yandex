const { merge } = require('webpack-merge')
const common = require('./webpack.common.ts')
const devPath = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: false,
    port: 3000,
    open: true,
    historyApiFallback: true,
    static: {
      directory: devPath.join(__dirname, 'dist')
    }
  }
})
