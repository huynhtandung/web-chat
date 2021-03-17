const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => ({
  entry: ["./src/index.ts"],
  mode: env.NODE_ENV,
  target: "node",
  watch: env.NODE_ENV === "development",
  resolve: {
    alias: {
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@environments": path.resolve(__dirname, "./src/environments"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@resolvers": path.resolve(__dirname, "./src/resolvers"),
      "@typeDefs": path.resolve(__dirname, "./src/typeDefs"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@validations": path.resolve(__dirname, "./src/validations"),
    },
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  externals: [nodeExternals()],
});
