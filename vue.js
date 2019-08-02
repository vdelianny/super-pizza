var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  publicPath: path.resolve(__dirname, ''),
  outputDir: path.resolve(__dirname, 'dist/'),
  chainWebpack: config => {
      config.resolve.alias
          .set('vue$', 'vue/dist/vue.esm.js')
      config.module
        .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
      config.module
          .rule('js')
            .test(/\.js$/)
            .use('babel-loader')
              .loader('babel-loader')
              .end()
      config.module
          .rule('css')
            .test(/\.css$/)
            .use('vue-style-loader')
              .loader('vue-style-loader')
              .end()
      config.module
          .rule('png|jpg|gif|svg')
            .test(/\.(png|jpg|gif|svg)$/)
            .use('file-loader')
              .loader('file-loader')
              .tap(options => {
            options: {
              name: '[name].[ext]?[hash]'
            }
                  return options
              })
              .end()
    },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.resolve(__dirname, 'dist'),
        routes: ['/'],

        renderer: new Renderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event'
        })
      })
    ]
  }
}