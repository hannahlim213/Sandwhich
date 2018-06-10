var express = require("express");

var router = express.Router();

var sandwich = require("../models/sandwhich.js");

router.get("/", function (req, res) {
    sandwich.all(function (data) {
        var hbsObject = {
            sandwiches: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/sandwich", function (req, res) {
    sandwich.create([
        "sandwich_name", "devoured"
    ], [
            req.body.sandwich_name, (req.body.devoured === "true" ? 1 : 0) 
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/sandwich/:id", function (req, res) {
    sandwich.update(req.body, "id= " + req.params.id, function(result) {
        res.end();
    });
});

module.exports = router;