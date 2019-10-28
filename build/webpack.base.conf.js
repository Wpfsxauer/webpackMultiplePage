const path = require('path')

const utils = require('./utils')

const config = require('../config')

const vueLoaderConfig = require('./vue-loader.conf')

const entries =  utils.getMultiEntry('./src/modules/**/*.js');

const basePash = process.env.NODE_ENV === 'production'
  ? config.build.assetsPublicPath
  : '';

const publicPath = process.env.NODE_ENV === 'production'
  ? config.build.assetsPublicPath
  : '../../';

console.log(entries);

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry:entries,

  output: {
    path: config.build.assetsRoot,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'common': resolve('src/common'),
      'components': resolve('src/components'),
      'api': resolve('src/api'),
      'assets': resolve('src/assets'),
      'mixins': resolve('src/mixins'),
      'views': resolve('src/views')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath(basePash +'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath,
          name: utils.assetsPath(basePash +'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },

  externals: {
    "echarts": "echarts"
  },
}
