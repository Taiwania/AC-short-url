// Mongoose
const mongoose = require('mongoose')

// Model Schema
const Schema = mongoose.Schema
const shortUrlSchema = new Schema({
  url: { type: String, required: true },
  suffix: { type: String, required: true}
})

// Export Model
module.exports = mongoose.model('ShortUrl', shortUrlSchema)