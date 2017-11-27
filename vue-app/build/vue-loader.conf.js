'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap


module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting, 
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    // require('postcss-plugin-px2rem')({
    //   rootValue: 72, // 这里对应的是720的设计图尺寸
    //   selectorBlackList: ['html'],
    //   mediaQuery: true,
    //   propBlackList: ['border-radius'] // 如果要保持font-size不转换，替换为 ['font-size']
    // }),
    require('postcss-salad')({ 
      browsers: ['ie > 8', 'last 2 version'],
      features: {
        "bem": true //pass boolean false can disable the plugin
        // "inlineSvg": {
        //   "path": "src/svgs"
        // }
      }
    })
  ]

}
