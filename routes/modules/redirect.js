// 引用 Express 與 Express 路由器
const express = require("express");
const router = express.Router();
// 引用 Todo model
const ShortUrl = require("../../models/shorturl");

router.get("/:suffix", async (req, res) => {
  try {
    const targetSuffix = await ShortUrl.findOne({ suffix: req.params.suffix });
    if (targetSuffix) {
      res.redirect(targetSuffix.url);
    } else {
      res.status(404).send(`您所輸入的短網址不存在。`);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;