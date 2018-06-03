var express = require('express');
var router = express.Router();

module.exports = function(db) {
  router.get('/', function(req, res, next) {
    res.render('spaces');
  });

  router.get('/tr1', function(req, res, next) {
    res.render('spaces_tr1');
  });

  router.get('/tr2', function(req, res, next) {
    res.render('spaces_tr2');
  });
  
  return router;
}
