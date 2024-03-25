const path = require(path);
const HtmlWebpackPlugin = require("html-webpack-plugin"); //do i need to npm install it ?

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: "./src/index.html",
    }),
  ],
};
