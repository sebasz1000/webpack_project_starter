const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"] // Requires/imports every SRC from <image> tag at template.html vía javascript
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader", //tells webpack what to do with image type files
          options: {
            name: "[name].[hash].[ext]", //export options to dist|build folder
            publicPath: "./dist/img",
            outputPath: "img" // name of the webpack exported folder at dist
          }
        }
      }
    ]
  }
};
