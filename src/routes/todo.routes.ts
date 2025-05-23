import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todo.controller';
import authMiddleware from '../middlewares/auth.middleware';
import { createTodoSchema } from '../validators/todo.validators';
import { validateBody } from '../middlewares/validate.middleware';


const router = express.Router();

router.get('/all', [authMiddleware], getTodos);
router.post('/add', [authMiddleware, validateBody(createTodoSchema)], createTodo);
router.put('/update/:id', [authMiddleware], updateTodo);
router.delete('/delete/:id', [authMiddleware], deleteTodo);

export default router;
