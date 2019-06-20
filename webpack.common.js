const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, './src/assets/'),
            Config: path.resolve(__dirname, './src/config/'),
            Helpers: path.resolve(__dirname, './src/helpers/'),
            Models: path.resolve(__dirname, './src/models/'),
            Views: path.resolve(__dirname, './src/views/'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
            showErrors: true,
            template: './src/template.html',
            title: 'Brian Clark',
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ManifestPlugin(),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, './favicon.png'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.sss$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(gif|jpg|png)$/,
                loader: 'image-size-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    context: path.resolve(__dirname, 'src'),
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        // TODO: Utilize 'image-size-loader' instead
                        loader: 'svg-inline-loader',
                        options: {
                            classPrefix: true,
                            idPrefix: true,
                        },
                    },
                    { loader: 'svgo-loader' },
                ],
            },
        ],
    },
}
