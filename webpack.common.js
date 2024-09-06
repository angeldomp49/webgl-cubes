const path = require('path');

module.exports = {
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