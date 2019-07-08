var globEntry = require("webpack-glob-entry")

module.exports = {
    entry: globEntry(__dirname + "/src/**"),
    output: {
        path: __dirname + "/../src/main/webapp",
        filename: "[name].bundle.js",
        publicPath: "/static/react"
    }
};