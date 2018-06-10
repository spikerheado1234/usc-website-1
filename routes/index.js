var express = require("express");
var router = express.Router();

var users = require("./users");
var about_us = require("./about_us");
var spaces = require("./spaces");
var events = require("./events");
var store = require("./store");
var contact_us = require("./contact_us");
var indexController = require("../controllers/indexController");

module.exports = function(db) {
  // Other route modules go here
  router.use("/user", users(db));
  router.use("/about_us", about_us(db));
  router.use("/spaces", spaces(db));
  router.use("/events", events(db));
  router.use("/store", store(db));
  router.use("/contact_us", contact_us(db));

  // Handle static pages
  router.get("/", function(req, res, next) {
    res.render("index", { title: "Index Page" });
  });
  router.post("/", indexController.login);

  return router;
};
