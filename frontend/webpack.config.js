const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => ({
  mode: env.NODE_ENV,
  entry: [path.resolve(__dirname, "src/index.js")],
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@environments": path.resolve(__dirname, "./src/environments"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        oneOf: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/,
            sideEffects: true,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                  },
                },
              },
            ],
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: true,
      title: "React App",
    }),
    new Dotenv({
      path: path.resolve(__dirname, "./.env"),
      safe: true,
      systemvars: true,
      silent: true,
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
});
