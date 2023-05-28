// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();
// 引用 Todo model
const ShortUrl = require("../../models/shorturl");

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;