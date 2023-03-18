const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());

// Set up a proxy for the IGDB API
app.use(
  "/api/games",
  createProxyMiddleware({
    target: "https://api.igdb.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api/games": "/v4/games",
    },
  })
);

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
