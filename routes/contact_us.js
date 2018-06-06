var express = require('express');
var router = express.Router();

module.exports = function(db) {

  router.get('/', function(req, res, next) {
    res.render('contact_us');
  });

  return router;
};
