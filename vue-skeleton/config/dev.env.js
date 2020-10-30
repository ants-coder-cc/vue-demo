"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
const { SkeletonPlugin } = require("page-skeleton-webpack-plugin");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  plugins: [
    // 省略其他插件的配置代码...

    // 步骤2：在插件中进行配置
    new SkeletonPlugin({
      pathname: path.resolve(__dirname, "../shell"), // the path to store shell file
      staticDir: path.resolve(__dirname, "../dist"), // the same as the `output.path`
      routes: ["/"] // Which routes you want to generate skeleton screen
    })
  ]
});
