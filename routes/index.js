var express = require("express");
var router = express.Router();

var users = require("./users");

module.exports = function(db) {
  // Other route modules go here
  router.use("/user", users(db));

  // Handle static pages
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Index Page" });
  });
  router.get("/about_us", function(req, res, next) {
    res.render("about_us");
  });
  router.get("/events", function(req, res, next) {
    res.render("events");
  });
  router.get("/spaces", function(req, res, next) {
    res.render("spaces");
  });
  router.get("/spaces/tr1", function(req, res, next) {
    res.render("tr1");
  });
  router.get("/spaces/tr2", function(req, res, next) {
    res.render("tr2");
  });
  return router;
};
