const path = require('path') // lấy đường dẫn tuyệt đối của thư mục
const Vendor = ['react', 'react-dom']
const HtmlWebpackPlugin = require('html-webpack-plugin')
// var HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const mode = process.env.WEBPACK_SERVE ? 'development' : 'production'

const config = {
    mode,
    entry: {
        bundle: './src/index.js',
        vendor: Vendor,
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
                test: /\.css$/
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
        // minimizer: [
        //     new UglifyJsPlugin()
        // ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CopyPlugin([{ from: '/public', to: './' }], {
            ignore: ['index.html'],
        }),
        // new HardSourceWebpackPlugin(),
        new WebpackBuildNotifierPlugin({
            suppressCompileStart: false,
            suppressSuccess: false,
        })
    ],
    serve: {
        port: 9000,
        hotClient: true
    }
}
// new HardSourceWebpackPlugin();
module.exports = config;