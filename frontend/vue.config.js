const BundleTracker = require("webpack-bundle-tracker")

module.exports = {
  publicPath: "http://127.0.0.1:8000/",
  outputDir: '.dist/',

  chainWebpack: config => {
    config.optimization
        .splitChunks(false)

    config
        .plugin('BundleTracker')
        .use(BundleTracker, [{filename: '../webpack-stats.json'}])

    config.resolve.alias
        .set('__STATIC__', 'static')

    config.devServer.headers({"Access-Control-Allow-Origin": ["\*"]})
  },
  pages: {
    app: 'src/main.js'
  },
  "transpileDependencies": [
    "vuetify"
  ]
}