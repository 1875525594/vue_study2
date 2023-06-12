//common js 暴露
module.exports = {
    pages: {
        index: {
            //入口 C:\work\VueSt\vue-advance\24_src_求和案例Vuex完整版(包含优化)
            entry: '24_src_求和案例Vuex完整版(包含优化)/main.js',
        },
    },
    //关掉默认的语法检查np
    lintOnSave: false,

    //19_src_vue中配置代理(解决跨域请求的问题)
    //开启代理服务器,脚手架代理服务器，本身端口和前端public服务器一致，都是8080

    //单个代理(方式一)
    //而且，该服务器不是所有请求都发送到5001的服务器，在前端public服务器有的则会从前端public服务器拿，没有则去5001的服务器拿。
    // devServer:{
    //     proxy: 'http://localhost:5001', //将请求转发给端口号5001的服务器，注意这里只能配置单个代理，不能配置多个代理
    // }

    //(方式二) 多个代理
    // devServer: {
    //     proxy: {
    //         //当请求的前缀是api，直接转发请求到服务器5001端口
    //         '/api': {
    //             target: 'http://localhost:5001',
    //             ws: true, //用于支持websocket
    //             changeOrigin: true, //用于控制请求头中host的值（端口号）
    //             pathRewrite: {
    //                 //代理服务器请求时，url含api替换成空字符串后，再发送。
    //如：请求代理服务器http://localhost:8080/api/students，代理服务器拿到后修改成http://localhost:8080/students去请求5001服务器。
    //                 '^/api': '',
    //             }
    //         },
    //         '/demo': {
    //             target: 'http://localhost:5002',
    //             //不写 ws和changeOrigin默认为true
    //             pathRewrite: {
    //                 '^/demo': '',
    //             }
    //         }
    //     }
    // }
}
