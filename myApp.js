require("dotenv").config();

let express = require("express");
let app = express();
let path = require("path");
let bodyParser = require("body-parser");

absolutePath = path.join(__dirname, "views/index.html");
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: false }));

console.log("Hello World");

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json({ message: process.env.MESSAGE_STYLE });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

app.get.post("/name", (req, res) => {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}` });
});

module.exports = app;
