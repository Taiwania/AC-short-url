// Express
const express = require("express");
const app = express();

// Mongoose and MongoDB
require("./config/mongoose");

const PORT = process.env.PORT || 3310;
const LocalURL = "http://localhost";

let URL = "";
if (process.env.HEROKU) {
  URL = process.env.HEROKU_URL;
} else {
  URL = `${LocalURL}:${PORT}`;
}

// Body-parser and routes
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require("./routes");
app.use(routes);

// Handlebars
const exphbs = require("express-handlebars");
app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

// Get the suffix and ShortURL Model
const ShortUrl = require("./models/shorturl");

// Listener
app.listen(PORT, () => {
  console.log(`The website ${URL} is online.`);
});
