import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todo.controller';
import authMiddleware from '../middlewares/auth.middleware';


const router = express.Router();

router.get('/all', [authMiddleware], getTodos);
router.post('/add', [authMiddleware], createTodo);
router.put('/update/:id', [authMiddleware], updateTodo);
router.delete('/delete/:id', [authMiddleware], deleteTodo);

export default router;
