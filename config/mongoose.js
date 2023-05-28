const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("MongoDB encountered the error(s).");
});
db.once("open", () => {
  console.log("MongoDB is connected successfully.");
});