const CleanWebpackPlugin = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
//const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = mode => ({
  mode,
  output: {
    filename: "[name].bundle.js",
  },

  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new CleanWebpackPlugin("./dist"),
    //  new ErrorOverlayPlugin(),
  ],
});
