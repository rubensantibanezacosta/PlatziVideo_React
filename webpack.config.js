const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const {WebpackManifestPlugin} = require("webpack-manifest-plugin");
const dotenv = require('dotenv');
dotenv.config();
const { ENV } = process.env;

const isDev = (ENV === "development");
const entry=['./src/frontend/index.js'];

if(isDev){entry.push( 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')};

module.exports = {
  entry: entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev?'assets/app.js':'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  module: {
    rules: [
      {
        enforce: "pre",
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: "eslint-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[md5:hash].[ext]' },
          }
        ],
      },
    ],
  },
  devServer:{
    historyApiFallback: true,
  },
  plugins: [
    isDev?
    new webpack.HotModuleReplacementPlugin():
    new CompressionWebpackPlugin({
      test:/\.js$|1\css$/,
      filename:"[path].gz",
    }),
    isDev?()=>{}:new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev?'assets/app.css':'assets/app-[hash].css',
    }),
  ],
};