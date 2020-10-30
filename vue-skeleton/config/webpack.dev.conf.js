//引入当前目录下的utils.js文件模块var utils = require('./utils')//node的path模块
var path = require('path')//内置模块
var webpack = require('webpack')//引入config目录下的index.js文件
var config = require('../config')//进行合并对象，相同项目会进行覆盖
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')// 下面是一个自动生成html的插件，能够把资源自动加载到html文件中// 详情请看 (1）
var HtmlWebpackPlugin = require('html-webpack-plugin')// 下面这个插件是用来把webpack的错误和日志收集起来，漂亮的展示给用户// 详情请看 (2)
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')//=======================静态编译ssi资源==================================
var SSICompileWebpackPlugin = require('ssi-webpack-plugin')
const { SkeletonPlugin } = require('page-skeleton-webpack-plugin')

// add hot-reload related code to entry chunks// Object.keys(obj) Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，//数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
Object.keys(baseWebpackConfig.entry).forEach(function (name) {// 下面这个结果就是把webpack.base.conf.js中的入口entry改成如下配置 // app: ['./build/dev-client','./src/main.js']    //即数组多加了一个元素
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
// 下面是合并配置对象，将这个配置文件特有的配置添加替换到base配置文件中
module.exports = merge(baseWebpackConfig, {
  module: {　　// 下面是把utils配置中的处理css类似文件的处理方法拿过来，并且不生成cssMap文件
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development// devtool是开发工具选项，用来指定如何生成sourcemap文件，cheap-module-eval-source-map此款soucemap文件性价比最高
  devtool: '#source-map',
  plugins: [// DefinePlugin内置webpack插件，专门用来定义全局变量的，下面定义一个全局变量 process.env 并且值是如下 /* 'process.env': { NODE_ENV: '"development"' } 这样的形式会被自动转为 'process.env': '"development"' 各位骚年看好了，development如果不加双引号就当做变量处理，程序会报错 */
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),

    //提取公共代码块 babel-polyfill只能有一个实例
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['index', 'admin'],
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),// 下面这个插件比较简单，就是当webpack编译错误的时候，来中端打包进程，防止错误代码打包到文件中，你还不知道
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: './src/assets/images/favicon.ico',
      excludeChunks: ['admin'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: 'admin.html',
      favicon: './src/assets/images/favicon.ico',
      excludeChunks: ['index'],
      inject: true
    }),
    new SSICompileWebpackPlugin({
      publicPath:'',
      localBaseDir:'C:/Developer/newWorkspace',
      minify:false
    }),
    new FriendlyErrorsPlugin(),
    new SkeletonPlugin({
      pathname: path.resolve(__dirname, '../shell'), // the path to store shell file
      staticDir: path.resolve(__dirname, '../dist'), // the same as the `output.path`
      routes: ['/'], // Which routes you want to generate skeleton screen
  })
  ]
})
