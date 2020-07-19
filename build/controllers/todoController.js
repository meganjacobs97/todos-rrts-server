"use strict";
var db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.Todo.find(req.query)
            .then(function (todos) { return res.json(todos); })
            .catch(function (err) { return res.status(422).json(err); });
    },
    create: function (req, res) {
        db.Todo.create(req.body)
            .then(function (todo) { return res.json(todo); })
            .catch(function (err) { return res.status(422).json(err); });
    }
};
