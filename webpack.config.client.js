const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(__dirname, 'src');

module.exports = [{
    entry: [path.join(sourcePath, 'client')],
    output: {
        path: path.join(__dirname, 'dist', 'client'),
    },
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
        contentBase: path.join(__dirname, 'dist', 'client'),
        watchContentBase: true,
        proxy: { 'api': 'http://localhost:5000/' },
        stats: 'errors-only',
    },
}]