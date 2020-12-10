const webpack = require('webpack');
const path = require('path')

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    hot: true,
    proxy: {

    },
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
      test: /\.jsx?/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    ]
  }
}


module.exports = config