const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')
const DashboardPlugin = require('webpack-dashboard/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new WebpackNotifierPlugin({ alwaysNotify: true, contentImage: false }),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        publicPath: '/',
    },
})
