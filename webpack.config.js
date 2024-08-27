const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './packages/main/index.ts',
        preload: './packages/preload/index.ts',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    plugins: [
    
],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'electron-main',
};