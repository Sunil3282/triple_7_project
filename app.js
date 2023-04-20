const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

PORT = process.env.PORT || 3000;
// About-Page
app.use("/about", (req, res, next) => {
  res.render("about");
});
// Homepage-Page
app.use("/", (req, res, next) => {
  res.render("index");
});

app.listen(PORT, (req, res, next) => {
  console.log(`Server is Running on Port : ${PORT}`);
});
