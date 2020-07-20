const todoController = require("../controllers/todoController");

//matches with /api/todos
router.route("/todos")
    .get(todoController.findAll)
    .post(todoController.create);

module.exports = router; 