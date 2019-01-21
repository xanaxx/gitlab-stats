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
                use: ['babel-loader'],
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
            { from: './config/config.yml', to: './config/' },
            { from: './config/ssl/server.csr', to: './config/ssl/server.csr' },
            { from: './config/ssl/server.key', to: './config/ssl/server.key' },
            { from: './config/ssl/server.crt', to: './config/ssl/server.crt' },
        ]),
        new WebpackShellPlugin({ onBuildEnd: ['nodemon ./dist/server/index.js'] }),
    ],
    stats: 'errors-only',
}];
