const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const sourcePath = path.resolve(__dirname, 'src');

module.exports = [{
    entry: [path.join(sourcePath, 'client')],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{ loader: 'file-loader?name=img/[name]_[hash:base64:5].[ext]' }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        proxy: { "api": "http://localhost:5000/" },
    },
}, {
    entry: [path.join(sourcePath, 'server')],
    output: { filename: 'server/bundle.js' },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader']
            },
        ],
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    plugins: [
        new CopyWebpackPlugin([
            { from: './config.yml', to: './server' },
        ]),
    ]
}]