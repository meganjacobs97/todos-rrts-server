"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../models");
var mongoose = require("mongoose");
;
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
    },
    update: function (req, res) {
        console.log(req);
        var filter = { id: mongoose.ObjectId(req.params.id) };
        var update = req.body;
        console.log(req.body);
        db.Todo.findOneAndUpdate(filter, update, { new: true })
            .then(function (todo) {
            res.json(todo);
        })
            .catch(function (err) { return res.status(422).json(err); });
    },
    delete: function (req, res) {
        var filter = { id: mongoose.ObjectId(req.params.id) };
        db.Todo.findOne(filter).then(function (todo) {
            db.Todo.deleteOne(filter)
                .then(function (result) { return res.json(todo); });
        }).catch(function (err) { return res.status(422).json(err); });
    }
};
