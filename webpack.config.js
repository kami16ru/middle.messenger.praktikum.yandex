const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'prodev-chat.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
    // alias: {
    //   '@': path.resolve(__dirname, 'src')
    // }
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 3000
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json')
            }
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader'
          // 'postcss-loader',
          // 'sass-loader'
        ]
      }, {
        test: /\.hbs/,
        loader: 'handlebars-loader'
      }
    ]
  }
}
