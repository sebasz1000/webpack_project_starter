const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge"); // merges webpack.common with the rest of production object setup
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizaCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
  ],
  optimization: {
    minimizer: [
      new OptimizaCssAssetsPlugin(), //minimizes extracted css
      new TerserPlugin(), //minimizes output js file. Plugin already comes with webpack by default
      new HtmlWebpackPlugin({
        filename: "../index.html", // generates this index.html at dist folder from src dummy html template with  dinamicall hashed script inserting
        template: "src/template.html", //gets html dummy template at src
        minify: {
          //minimizes ouput html
          removeAttributeQuotes: true,
          collapseWhitespace: false,
          removeComments: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          "css-loader", // 2. css-loader imports css loader as javascript intro src/index.js
          "sass-loader" //3. sass-loader converts main.sass file intro regular css file
        ]
      }
    ]
  },
  output: {
    filename: "[name].[contentHash].bundle.js", //uses all entry js points from common  dinamically
    path: path.resolve(__dirname, "dist")
  }
});
