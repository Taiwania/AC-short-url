const express = require("express");
const router = express.Router();
const ShortUrl = require("../../models/shorturl");

const generatedSuffix = require("../../generate-suffix");
const PORT = process.env.PORT || 3310;
const URL = process.env.URL || "http://localhost";

router.post("/", async (req, res) => {
  // 檢查使用者是否將網址列留空，如果有，給出錯誤訊息
  if (!req.body.url) {
    const noUrlInput = `您沒有輸入網址，請重新整理後再輸入有效的網址。`;
    res.render("result", { result: noUrlInput });
  } else {
    // Get the Long URL and suffix from the Input Box and suffix generator
    const longURL = req.body.url;
    let suffix = generatedSuffix(req.body);
    let suffixExists = true;
    while (suffixExists) {
      const result = await ShortUrl.findOne({ suffix: suffix });
      if (result) {
        suffix = generatedSuffix(req.body);
      } else {
        suffixExists = false;
      }
    }

    // Set the related message and button
    const copyButton = `<button class="btn btn-success" id="copyBtn" onclick="copyToClipboard()">複製</button>`;
    const newShortUrl = `${URL}:${PORT}/${suffix}`;

    // 檢查輸入的網址是否在資料庫有紀錄
    ShortUrl.findOne({ url: longURL })
      .then((result) => {
        // 如果有則給出產生過的短網址
        if (result) {
          const shortUrl = `${URL}:${PORT}/${result.suffix}`;
          const recordMsg = `您輸入的網址曾產生出這個短網址：<strong id="shortUrl">${shortUrl}</strong><br>如果要重新輸入網址，請使用瀏覽器的重新整理按鈕。`;
          res.render("result", { result: recordMsg, copy: copyButton });
        } else {
          const shortUrl = newShortUrl;
          const successMsg = `短網址產生完畢：<strong id="shortUrl">${shortUrl}</strong><br>如果要重新輸入網址，請使用瀏覽器的重新整理按鈕。`;
          return ShortUrl.create({ url: longURL, suffix }) // 如果沒有則將輸入的網址及產生的短網址後綴輸入資料庫並給出對映短網址
            .then(() =>
              res.render("result", { result: successMsg, copy: copyButton })
            )
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }
});

module.exports = router;