// use the below command on root dir to build plugin individually
// npx webpack --mode production --config .\src\plugins\abc\webpack.plugin.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist/plugins';
const pluginName = path.basename(__dirname);

let entry = {};
entry[`${pluginName}`] = `./src/plugins/${pluginName}/index.js`;
console.log(entry);

module.exports = {
  entry,
  output: {
    path: path.join(__dirname,'../../../', outputDirectory),
    filename: '[name]/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    },
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [{ from: /^\/admin.html/, to: '/build/admin.html' }]
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: `${pluginName}/index.html`,
      chunks: [pluginName]
    }),
  ]
};
