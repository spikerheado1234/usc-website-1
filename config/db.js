const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

var basename = path.basename(module.filename);
var modelpath = "../models";

function getSequelize() {
  if (process.env.DB_URL) {
    return new Sequelize(process.env.DB_URL, {
      pool: {
        max: 5,
        idle: 30000,
        acquire: 60000
      }
    });
  } else if (process.env.SQLITE_FILE) {
    return new Sequelize({
      dialect: "sqlite",
      storage: process.env.SQLITE_FILE
    });
  }
  return new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT
  });
}

var db = {};

var sequelize = getSequelize();

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
