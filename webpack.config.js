const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { resolve: resolvePath, relative: pathRelative } = require("path");
const fromProject = path => resolvePath(__dirname, path);

const cssPlugins = [new ExtractTextPlugin("grid.css")];

module.exports = {
  entry: {
    main: fromProject("src/index.js")
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
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { sourceMap: true }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["babel-preset-env"]
            }
          }
        ]
      }
    ]
  },
  plugins: [...cssPlugins]
};
