const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
    entry: './src/js/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/teste.html"
        }),
        new HtmlWebpackPlugin({
            filename: "teste.html",
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
