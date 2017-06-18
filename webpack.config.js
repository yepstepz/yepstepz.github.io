var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

//top of file


module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            // },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
        ],
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devServer: { inline: true },
};