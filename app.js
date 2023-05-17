const express = require('express')
const app = express()
const port = 3310

app.get('/', (req, res) => {
  res.send(`Test`)
})

app.listen(port, () => {
  console.log(`The website http://localhost:${port} is online.`)
})