const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
  },
  devServer: {
    // host: 'localhost', // ip
    host: '172.16.110.1',
    //host: '192.168.1.102', // ip
    port: 8080, // 设置端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy:{
        '/api': {
             target: 'http://192.168.3.250:8360', //API服务器的地址
            changeOrigin: true, // 虚拟的站点需要更管origin
          }
    }  //设置代理
  }
}
