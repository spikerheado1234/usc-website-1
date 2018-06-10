var users = require("../models/users.js");


module.exports.login = function(req, res, next) {
  var userName = req.body.username;
  var passWord = req.body.password;
  users.sequelize.query('INSERT INTO user (username, password) VALUES (userName, passWord)');
  res.render('index');
};
