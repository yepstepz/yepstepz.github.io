var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const sassLoaders = [
    'css-loader',
    'sass-loader'
]
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
            {
                test: /\.pug$/,
                loaders: ['file-loader?name=./index.html', 'pug-html-loader?pretty&exports=false']
            }
        ],
    },
    plugins: [
        // new ExtractTextPlugin("index.html"),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.jade', '.pug']
    },
    devServer: { inline: true }
};