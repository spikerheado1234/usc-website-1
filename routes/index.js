var express = require("express");
var router = express.Router();

var users = require("./users");

module.exports = function(db) {
  // Other route modules go here
  router.use("/user", users(db));

  // Handle static pages
  router.get("/about", function(req, res, next) {
    res.send("about");
  });
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Index Page" });
  });
  router.get("/about_us", function(req, res, next) {
    res.render("about_us");
  });
  router.get("/events", function(req, res, next) {
    res.render("events");
  });

  return router;
};
