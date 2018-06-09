var express = require("express");

var router = express.Router();

var sandwich = require("../models/sandwhich.js");

router.get("/", function(req, res) {
    sandwich.all(function(data) {
        var hbsObject = {
            sandwiches: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/sandiwch", function(req, res) {
    sandwich.create([
        "sandwich_name", "devoured"
    ], [
        req.body.sandwich_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

module.exports = router;