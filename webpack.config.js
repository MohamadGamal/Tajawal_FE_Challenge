const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");

const modeConfig = require("./webpack/utils/modeConf");
const presetConfig = require("./webpack/utils/presetConf");

module.exports = ({ mode = "development", presets = [], ...env }) =>
  webpackMerge(
    {
      mode,
      serve: {
        open: true,
        content: [__dirname],
        hot: {
          host: "localhost",
          port: 8080,
        },
        add: (app /* , middleware, options */) => {
          app.use(convert(history()));
        },
      },
      devServer: {
        contentBase: "./dist",
        hot: true,
        open: true,
        historyApiFallback: true,
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            use: "babel-loader",
          },
          {
            test: /\.jsx?$/,
            use: "eslint-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: "file-loader",
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: "file-loader",
          },
        ],
      },
      resolve: {
        alias: {
          Components: "./src/Components/",
        },
        extensions: [".wasm", ".mjs", ".js", ".jsx", ".json", ".css"],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./templates/index.html",
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets, ...env }),
  );
