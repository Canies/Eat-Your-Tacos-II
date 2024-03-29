// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var tacos = {
  all: function(cb) {
    orm.all("tacos", function(results) {
      cb(results);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tacos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tacos", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = tacos;
