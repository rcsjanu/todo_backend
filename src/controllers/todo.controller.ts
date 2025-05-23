import { Request, Response } from 'express';
import Todo from '../models/Todo';
import { AuthRequest } from '../middlewares/auth.middleware';

export const getTodos = async (req: AuthRequest, res: Response): Promise<void> => {
    const todos = await Todo.find({ user: req.userId });
    res.status(200).json({ message: "TODOs retrieved..!", data: todos });
};

export const createTodo = async (req: AuthRequest, res: Response): Promise<void> => {
    const { title, description, dueDate } = req.body;
    const todo = await Todo.create({ title, description, dueDate, user: req.userId });
    res.status(200).json({ message: "TODO created..!", data: todo });;
};

export const updateTodo = async (req: AuthRequest, res: Response): Promise<void> => {
    const { id } = req.params;
    const updated = await Todo.findOneAndUpdate(
        { _id: id, user: req.userId },
        req.body,
        { new: true }
    );
    if (!updated) {
        res.status(404).json({ message: 'Todo not found' });
        return;
    }
    res.status(200).json({ message: "TODO updaated..!", data: updated });
};

export const deleteTodo = async (req: AuthRequest, res: Response): Promise<void> => {
    const { id } = req.params;
    const deleted = await Todo.findOneAndDelete({ _id: id, user: req.userId });
    if (!deleted) { res.status(404).json({ message: 'Todo not found' }); return; }
    res.status(200).json({ message: 'TODO Deleted successfully..!' });
};
