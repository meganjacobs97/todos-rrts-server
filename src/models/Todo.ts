import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
    title: string,
    content?: string,
    completed: boolean
};

const TodoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

const Todo = mongoose.model<ITodo>("Todo", TodoSchema);
module.exports = Todo; 