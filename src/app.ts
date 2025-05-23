import express from 'express';
import dotenv from 'dotenv';
import userAuthRoutes from './routes/userAuth.routes';
import todoRoutes from './routes/todo.routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/user-auth', userAuthRoutes);
app.use('/api/todos', todoRoutes);

export default app;