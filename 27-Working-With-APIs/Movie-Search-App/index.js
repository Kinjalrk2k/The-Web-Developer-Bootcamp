const axios = require("axios");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("search");
});

app.get("/results", function (req, res) {
  axios
    .get(`http://www.omdbapi.com/?s=${req.query.movieQuery}&apikey=thewdb`)
    .then(function (response) {
      res.render("results", { data: response.data.Search });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

app.listen(3000, function () {
  console.log("Server started on PORT 3000");
});
