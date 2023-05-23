// Mongoose
const mongoose = require("mongoose");
const ShortUrl = require("../shorturl");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB
const db = mongoose.connection;
db.on("error", () => {
  console.log("MongoDB encountered the error(s).");
});
db.once("open", () => {
  console.log("MongoDB is connected successfully.");
  ShortUrl.create({ url: "https://www.youtube.com/", suffix: "YtbCo" });
});
