var express = require("express");
var router = express.Router();

module.exports = function(db) {
  /* GET users listing. */
  router.get("/", function(req, res, next) {
    res.send("Users index page");
  });
  return router;
};
