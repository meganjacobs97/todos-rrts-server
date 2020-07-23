"use strict";
var router = require("express").Router();
var todoController = require("../controllers/todoController");
//matches with /api/todos
router.route("/todos")
    .get(todoController.findAll)
    .post(todoController.create);
router.route("/todo/:id")
    .put(todoController.update);
module.exports = router;
