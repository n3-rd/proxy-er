const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello");
  console.log("app running");
});

app.get("/useproxy", (req, res) => {
  console.log(req.query.link);
  fetch(req.query.link)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

app.listen(process.env.PORT || 8000);
