var express = require('express');
var db = require("../config/db");

const User = db.sequelize.define('user', {
  username: {
    type: db.Sequelize.STRING
  },
  password: {
    type: db.Sequelize.STRING
  }
});

module.exports = User;
