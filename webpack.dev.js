//const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge"); // merges webpack.common with the rest of development object setup
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html", // generates this index.html at dist folder from src dummy html template with  dinamicall hashed script inserting
      template: "src/template.html" //gets html dummy template at src
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. style loader injects css into DOM
          "css-loader", // 2. css-loader imports css loader as javascript intro src/index.js
          "sass-loader" //3. sass-loader converts main.sass file intro regular css file
        ]
      }
    ]
  }
  /*output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  } 
  output is not requiered since webpack-dev-server doesnt outputs anything, 
  just use virtual memory files
  */
});
