const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin'); 
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
 
    mode: 'production',
    optimization: {
        minimizer: [ new OptimizeCssWebpackPlugin()]
    },
    output: {
        filename: './assets/js/[name].[contenthash].js',
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                attributes: false,
                minimize: false
                }
            },
            {
                test: /main\.scss$/i,
                exclude: /node_modules/,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
    ]
 
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
            { from: 'src/assets/img/', to: 'assets/img/' },
        ],}),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
    ]
 
}