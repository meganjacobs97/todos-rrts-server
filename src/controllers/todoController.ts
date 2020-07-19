const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Todo.find(req.query)
            .then(todos => res.json(todos))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Todo.create(req.body)
            .then(todo => res.json(todo))
            .catch(err => res.status(422).json(err));
    }
}