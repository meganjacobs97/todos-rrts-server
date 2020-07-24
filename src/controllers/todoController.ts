const db = require("../models");
import { Response, Request, ErrorRequestHandler } from "express";
const mongoose = require("mongoose");

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

interface Todo {
    id: number,
    title: string,
    completed: boolean
};

module.exports = {
    findAll: (req: RequestWithBody, res: Response) => {
        db.Todo.find(req.query)
            .then((todos: Todo[]) => res.json(todos))
            .catch((err: ErrorRequestHandler) => res.status(422).json(err));
    },
    create: (req: RequestWithBody, res: Response) => {
        db.Todo.create(req.body)
            .then((todo: Todo) => res.json(todo))
            .catch((err: ErrorRequestHandler) => res.status(422).json(err));
    },
    update: (req: RequestWithBody, res: Response) => {
        console.log(req)
        const filter = { id: mongoose.ObjectId(req.params.id) };
        const update = req.body;
        console.log(req.body);
        db.Todo.findOneAndUpdate(filter, update, { new: true })
            .then((todo: Todo) => {
                res.json(todo)
            })
            .catch((err: ErrorRequestHandler) => res.status(422).json(err));
    },
    delete: (req: RequestWithBody, res: Response) => {
        const filter = { id: mongoose.ObjectId(req.params.id) };
        db.Todo.findOne(filter).then((todo: Todo) => {
            db.Todo.deleteOne(filter)
                .then((result: number) => res.json(todo))
        }).catch((err: ErrorRequestHandler) => res.status(422).json(err));

    }
}