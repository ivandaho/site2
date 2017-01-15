var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};

