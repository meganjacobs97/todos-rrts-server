const db = require("../models");
import { Response, Request, ErrorRequestHandler } from "express";

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
    }
}