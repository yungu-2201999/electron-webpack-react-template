const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.tsx'), // 入口文件
    // 打包文件出口
    output: {
        filename: 'renderer.js', // 每个输出js的名称
        path: path.join(__dirname, '../../dist'), // 打包结果输出路径
        // clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
        publicPath: './' // 打包后文件的公共前缀路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
    ],
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                use: 'babel-loader'
            },
            {
                test: /.(css|sass|scss)$/, //匹配 css和less 文件
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator: {
                    filename: 'assets/images/[name][ext]', // 文件输出目录和命名
                },
            },
            {
                test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
                type: "asset", // type选择asset
                parser: {
                  dataUrlCondition: {
                    maxSize: 10 * 1024, // 小于10kb转base64位
                  }
                },
                generator:{ 
                  filename:'assets/fonts/[name][ext]', // 文件输出目录和命名
                },
              },
              {
                test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                  dataUrlCondition: {
                    maxSize: 10 * 1024, // 小于10kb转base64位
                  }
                },
                generator:{ 
                  filename:'assets/media/[name][ext]', // 文件输出目录和命名
                },
              },
        ]
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    }
}