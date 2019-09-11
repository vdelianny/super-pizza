/*
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, `dist`),
    routes: [`/`, `/pizzas`],
    postProcess(renderedRoute) {
      renderedRoute.html = renderedRoute.html
        .replace(/<script (.*?)>/g, `<script $1 defer>`)
        .replace(`id="app"`, `id="app" data-server-rendered="true"`)

      return renderedRoute
    },
    renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
      inject: {},
      renderAfterDocumentEvent: `render-event`
    })
  })
]

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...productionPlugins)
    }
  }
}*/