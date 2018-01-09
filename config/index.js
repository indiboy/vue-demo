
'use strict'
// Template version: 1.1.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    //原来的
    //assetsPublicPath: '/',
    //修改绝对路径为相对路径
    assetsPublicPath: './',
    /*关闭.map*/
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    /* 开启压缩  需要安装 compression-webpack-plugin*/
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    /*生产环境地址*/
    // httpUrl: 'https://mk-2.apengdai.com',
    httpUrl: 'http://cangdu.org:8001',
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    /*Access-Control-Allow-Origin*/
    proxyTable: {
      '/api': {
          // target: 'https://www.apengdai.com',
          //饿了么数据接口地址
          target: 'http://cangdu.org:8001',
          // target: 'https://mk-2.apengdai.com',
          // target: 'https://localhost:8088',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
          }
      }
    },
    /*开发环境地址*/
    httpUrl: '/api',
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
