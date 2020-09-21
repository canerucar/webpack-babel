const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'], //giriş dosyamız
    output: {
        path: path.resolve(__dirname,'dist'), //yeni oluşacak dosyamızın konumu
        filename: 'js/bundle.js' //yeni dosyamızın adı
    },
    //mode: 'development' //development modunda olduğumu belirtiyorum

    devServer : {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //oluşturulacak olan dosya
            template: './src/index.html' //belirttiğim html'i template olarak kullan
        })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}