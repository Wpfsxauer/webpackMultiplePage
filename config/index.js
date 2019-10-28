const path = require('path')

module.exports = {
  moduleName:'modules',

  configuration:[
    'sipevaluate',
    'sipapprove'
  ],

  assetsSubDirectory: 'static',

  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../jycloud'),
    assetsPublicPath: '../',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },

  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsPublicPath: '/',
    // proxyTable: {

    // },
    cssSourceMap: false
  }
}
