var express = require("express");

var router = express.Router();

// Import the model (taco.js) to use its database functions.
var taco = require("../models/tacos.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  taco.all(function(results) {
    var hbsObject = {
      tacos: results
    };
    console.log(hbsObject);
    res.render("tacos", hbsObject);
  });
});

router.post("/api/tacos", function(req, res) {
  taco.create([
    "toppings", "eaten"
  ], [
    req.body.toppings, false
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition,req.body.eaten);

  taco.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  taco.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
