const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const styleLintPlugin = require('stylelint-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
  entry: './src/main.js',

  output: {
    path: __dirname,
    filename: './src/js/app.js'
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin('./src/styles/main.css'),
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: '',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader?name=/src/images/[name].[hash].[ext]',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
        })
      }
    ]
  },

  stats: {
    colors: true
  },
  devtool: 'source-map'
};
