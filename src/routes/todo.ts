const router = require("express").Router();

const todoController = require("../controllers/todoController");

//matches with /api/todos
router.route("/todos")
    .get(todoController.findAll)
    .post(todoController.create);

router.route("/todo/:id")
    .put(todoController.update)
    .delete(todoController.delete);

module.exports = router; 