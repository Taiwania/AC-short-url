// Mongoose
const ShortUrl = require("../shorturl");
const db = require("../../config/mongoose");

// MongoDB
db.once("open", () => {
  ShortUrl.create({ url: "https://www.youtube.com/", suffix: "YtbCo" });
  console.log('The seeder is imported.')
});