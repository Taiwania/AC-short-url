// Express
const express = require("express");
const app = express();
const port = 3310;
const URL = "http://localhost";

// Body-parser and routes
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require('./routes')
app.use(routes);

// dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Mongoose and MongoDB
require('./config/mongoose')

// Handlebars
const exphbs = require("express-handlebars");
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

// Get the suffix and ShortURL Model
const ShortUrl = require("./models/shorturl");

app.get("/:suffix", async (req, res) => {
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

// Listener
app.listen(port, () => {
  console.log(`The website ${URL}:${port} is online.`);
});
