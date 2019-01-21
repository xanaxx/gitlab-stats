const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const sourcePath = path.resolve(__dirname, 'src');

module.exports = [{
    entry: [path.join(sourcePath, 'server')],
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist', 'server'),
    },
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
            { from: './config.yml', to: './' },
        ]),
        new WebpackShellPlugin({ onBuildEnd: ['nodemon ./dist/server/index.js'] }),
    ],
    stats: 'errors-only',
}];
