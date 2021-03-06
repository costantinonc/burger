// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger_name", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create("burger_name", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger_name", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger_name", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;