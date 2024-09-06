const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    entry: [
        "./src/app/CubeHeroSection.ts"
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "commonjs-static",
        }
    }
});