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

User.sync({force: true}).then(() => {
  return User.create({
    username: 'Ahan',
    password: 'Gupta'
  });
});

module.exports = User;
