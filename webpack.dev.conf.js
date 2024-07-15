module.exports = {
    // 关闭eslink
    lintOnSave: false,

    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:8899",
                pathRewrite:{'^/api':''}
            }
        }
    }
}