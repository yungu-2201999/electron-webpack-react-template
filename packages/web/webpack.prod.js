
const { merge } = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const baseConfig = require('./webpack.base.js');
const path = require('node:path')
module.exports = merge(baseConfig, {
    mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public'),
                    to: path.resolve(__dirname, '../../dist'),
                    filter: source => !source.includes('index.html')
                },
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, "../../dist/assets"),
                    noErrorOnMissing: true,
                },
            ],
        }),
    ]
})