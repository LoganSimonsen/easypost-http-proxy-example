// include dependencies
const dotenv = require("dotenv");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");
dotenv.config();

let authKey = process.env.prodkey;

// proxy middleware options
/** @type {import('http-proxy-middleware/dist/types').Options} */

const onProxyReq = function (proxyReq, req, res) {
  // add new header to request
  proxyReq.setHeader("Origin", "foobar");
  console.log(req.query.auth);
};

const options = {
  target: "https://api.easypost.com/v2", // target host
  changeOrigin: true, // needed for virtual hosted sites
  headers: {
    Origin: "https://demo-app292910129.com",
  },
  ws: true, // proxy websockets
  auth: authKey,
  logLevel: "debug",
  pathRewrite: {
    "^/api/old-path": "/api/new-path", // rewrite path
    "^/api/remove/path": "/path", // remove base path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    "dev.localhost:3000": "http://localhost:8000",
  },
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options, onProxyReq);

// mount `exampleProxy` in web server
const app = express();
app.use(cors());
app.use("/", exampleProxy);
app.listen(3000);