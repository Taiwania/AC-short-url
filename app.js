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

// Listener
app.listen(port, () => {
  console.log(`The website ${URL}:${port} is online.`);
});
