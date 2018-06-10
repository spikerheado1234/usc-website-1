var users = require("../models/users.js");


module.exports.login = function(req, res, next) {
  users.sequelize.query('INSERT INTO user (username, password) VALUES (req.body.username, req.body.password)')
};
