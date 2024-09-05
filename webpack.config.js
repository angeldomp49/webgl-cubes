const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        "./src/index.ts"
    ],
    devtool: "source-map",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public"),
        library: {
            type: "commonjs-static",
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    target: "web"

};