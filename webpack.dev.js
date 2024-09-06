const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        static: "./test/public",
        historyApiFallback: true
    },
    entry: [
        "./test/app/index.ts"
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "test/public"),
        library: {
            type: "commonjs-static",
        }
    }
});