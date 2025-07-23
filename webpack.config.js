const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {major, minor, patch} = require('./version.json');
const buildVersion = `${major}.${minor}.${patch}`;
module.exports = ({ mode } = { mode: "production" }) => {
 
    return {
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true,
                historyApiFallback:true
            },
            output: {
                publicPath: "",
                path: path.resolve(__dirname, `build/${buildVersion}`),
                filename: `assets/bundle.${buildVersion}.js`,
            },
            module: {
                rules: [ 
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.scss$/,
                        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
                    },
                    {
                        test: /\.ttf$/,
                        type: 'asset/resource',
                        generator: {
                          filename: `[name][ext]`,
                          publicPath: 'assets/fonts/',
                          outputPath: 'assets/fonts/'
                        }
                    },
                    {
                        test: /\.(jpg|png)$/,
                        type: 'asset/resource',
                        generator: {
                          filename: `[name][ext]`,
                          publicPath: 'assets/images/',
                          outputPath: 'assets/images/'
                        }
                    }
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.REACT_APP_VERSION' : JSON.stringify(buildVersion)
                }),
                new webpack.ProvidePlugin({
                    'React': 'react'
                }),
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin(),
                new MiniCssExtractPlugin({
                    filename: `assets/[name].${buildVersion}.css`
                })
            ],
            resolve: {
                extensions: ['.js', '.jsx', '.scss'],
                alias: {
                    '@Components': path.resolve(__dirname, 'src/Components'),
                    '@Styles': path.resolve(__dirname, 'src/styles')
                },
            }
        }

};