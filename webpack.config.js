const webpack = require("webpack");
const { resolve: resolvePath, relative: pathRelative } = require("path");
const fromProject = path => resolvePath(__dirname, path);

module.exports = {
  entry: {
    main: fromProject("index.js")
  },
  output: {
    path: fromProject("lib"),
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["babel-preset-es2015"]
            }
          }
        ]
      }
    ]
  }
};
