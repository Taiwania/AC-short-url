// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const home = require("./modules/home");
router.use("/", home);

module.exports = router;
