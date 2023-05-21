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

// Get the Long URL inputted
app.post('/', (req, res) => {
  const longURL = req.body.url
  const suffix = generatedSuffix(req.body)
  console.log('Long URL: ', longURL)
  console.log('Generated suffix: ', suffix)

  if (longURL.length === 0) {
    const noUrlInput = `您沒有輸入網址，請重新輸入。`
    res.render('result', { result: noUrlInput })
  } else {
    return ShortUrl.create({ url: longURL, suffix })
      .then(() => res.redirect('/'))
      .catch(error => console.log(error))
  }
})

// Result Page
app.get('/result', (req, res) => {
  res.render('result')
})

// Listener
app.listen(port, () => {
  console.log(`The website ${URL}:${port} is online.`)
})