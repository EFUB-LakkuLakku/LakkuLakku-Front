const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
        target: 'https://lakku-lakku.com', 
        changeOrigin: true,
      })
    );
  };