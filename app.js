// Express
const express = require('express')
const app = express()
const port = 3310
const URL = 'http://localhost'

// dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// MongoDB
const db = mongoose.connection
db.on('error', () => {
  console.log('MongoDB encountered the error(s).')
})
db.once('open', () => {
  console.log('MongoDB is connected successfully.')
})

// Handlebars
const exphbs = require('express-handlebars');
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Body-parser
app.use(express.urlencoded({ extended: true }))

// Get the suffix and ShortURL Model
const generatedSuffix = require('./generate-suffix')
const ShortUrl = require('./models/shorturl')

// Main Page
app.get('/', (req, res) => {
  res.render('index')
})

// Generate the short URL
app.post('/', (req, res) => {
  
  // 檢查使用者是否將網址列留空，如果有，給出錯誤訊息
  if (!req.body.url) {
    const noUrlInput = `您沒有輸入網址，請重新整理後再輸入有效的網址。`
    res.render('result', { result: noUrlInput })
  }

  // Get the Long URL and suffix from the Input Box and suffix generator
  const longURL = req.body.url
  const suffix = generatedSuffix(req.body)

  // Set the related message and button
  const copyButton = `<button class="btn btn-success" type="submit">複製</button>`
  const shortUrl = `${URL}:${port}/${suffix}`
  const successMsg = `短網址產生完畢：${shortUrl}<br>如果要重新輸入網址，請使用瀏覽器的重新整理按鈕。`

  // 檢查輸入的網址是否在資料庫有紀錄
  ShortUrl.findOne({ url: longURL })
    .then((result) => {
      // 如果有則給出產生過的短網址
      if (result) {
        const recordMsg = `您輸入的網址已產生過這個短網址：${URL}:${port}/${result.suffix}<br>如果要重新輸入網址，請使用瀏覽器的重新整理按鈕。`
        res.render('result', { result: recordMsg, copy: copyButton })
      } else {
        return ShortUrl.create({ url: longURL, suffix }) // 如果沒有則將輸入的網址及產生的短網址後綴輸入資料庫並給出對映短網址
          .then(() => res.render('result', { result: successMsg, copy: copyButton }))
          .catch(error => console.log(error))
      }
    })
    .catch(error => console.log(error))
})

// Listener
app.listen(port, () => {
  console.log(`The website ${URL}:${port} is online.`)
})