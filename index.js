const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = new express();
// Changes from container
app.get("/home", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/about", (req, res) => {
  res.json({ message: "about" });
});

app.get("/info", (req, res) => {
  res.json({ message: "info" });
});

app.listen(process.env.PORT, () => {
  console.log("Started the server at PORT :", process.env.PORT);
});
