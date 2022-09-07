let express = require("express");
let app = express();
let path = require("path");

absolutePath = path.join(__dirname, "views/index.html");
app.use("/public", express.static(path.join(__dirname, "/public")));

console.log("Hello World");

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

module.exports = app;
