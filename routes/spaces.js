var express = require('express');
var router = express.Router();

module.exports = function(db) {
  router.get('/', function(req, res, next) {
    res.render('spaces');
  });

  router.get('/tr2', function(req, res, next) {
    res.render('spaces_tr2');
  });

  router.get('/ctph', function(req, res, next) {
    res.render('spaces_ctph');
  });

  router.get('/amphitheatre', function(req, res, next) {
    res.render('spaces_amphitheatre');
  });

  router.get('/proto', function(req, res, next) {
    res.render('spaces_proto');
  });

  router.get('/chatterbox', function(req, res, next) {
    res.render('spaces_chatterbox');
  });

  return router;
}
