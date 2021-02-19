module.exports = {
    devServer : {
        proxy : {
            '/ajax' : {
                target : "https://m.maoyan.com",
                onProxyReq(proxyReq) {
                    proxyReq.setHeader("referer", "https://m.maoyan.com")
                    proxyReq.setHeader("origin", "https://m.maoyan.com")
                }
            },
        },
    },
}
// 这个是反向代理？？