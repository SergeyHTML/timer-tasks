var path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/app/assets/javascripts',
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
          },
          "sass-loader"
        ]
      }
    ]
  }
}