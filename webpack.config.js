const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //do i need to npm install it ?

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ttf$/i,
        type: "asset/resource",
      },
    ],
  },
};
