const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ mode }) => ({
  mode,

  output: {
    filename: "[name].[chunkhash].bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
