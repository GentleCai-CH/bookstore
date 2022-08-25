/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-02-09 19:42:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-14 23:17:40
 * @FilePath: \bookstore\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      ///api是后端数据接口的上下文路径
      '/api': {
          //这里的地址是后端数据接口的地址
          target: 'http://111.229.37.167/',
          //允许跨域
          changeOrigin: true,
      }
    }
  },
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true

}