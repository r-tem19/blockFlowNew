const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/json/api",
    createProxyMiddleware({
      target: "http://demo142.grissoft.com.ua",
      changeOrigin: true,
    })
  );
};
