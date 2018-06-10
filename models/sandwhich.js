var orm = require("../config/orm.js");

var sandwich = {
    all: function(cb) {
        orm.all("sandwich", function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb) {
        orm.create("sandwich", cols, vals, function(res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update("sandwich", objColVals, condition, function(res){
            cb(res);
        })
    },
    delete: function(condition, cb) {
        orm.delete("sandwich", condition, function (res) {
            cb(res);
        })
    }
}

module.exports = sandwich;