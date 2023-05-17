// Express
const express = require('express')
const app = express()
const port = 3310

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

app.get('/', (req, res) => {
  res.send(`Test`)
})

app.listen(port, () => {
  console.log(`The website http://localhost:${port} is online.`)
})