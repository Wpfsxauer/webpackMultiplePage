const path = require('path')

const config = require('../config')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')

function getMultiEntry (globPath) {

  let entries = {}, tmp = [];

  glob.sync(globPath).forEach(entry=> {

    config.configuration.forEach(value=>{

      tmp = entry.split('/').splice(-4);

      if( tmp[2] === value) entries[tmp[2]] = entry;

    })

  });

  return entries;
}

exports.getMultiEntry = getMultiEntry;

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  function generateLoaders (loader, loaderOptions) {

    let loaders = [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

exports.styleLoaders = function (options) {
  let output = []

  let loaders = exports.cssLoaders(options)

  for (let extension in loaders) {
    let loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

const page = getMultiEntry('./src/modules/**/*.html')

exports.page = function (plugins,pages = page) {

  for (let pathname in pages) {
    const conf = {
      filename: pathname + '.html',
      template: pages[pathname],
      chunks: ['manifest','vendor',pathname],
      inject: true,
      hash:true
    };

    plugins.push(new HtmlWebpackPlugin(conf));
  }
}




