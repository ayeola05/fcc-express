let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

absolutePath = path.join(__dirname, "views/index.html");

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

module.exports = app;
