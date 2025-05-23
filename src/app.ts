import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import userAuthRoutes from './routes/userAuth.routes';
import todoRoutes from './routes/todo.routes';
import { scheduleUpdateOfTodoStatus } from './jobs/updateTodoStatusJob';
import { errorHandler } from './middlewares/errorhandler.middleware';

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

app.use(errorHandler);

app.use('/api/user-auth', userAuthRoutes);
app.use('/api/todos', todoRoutes);

scheduleUpdateOfTodoStatus();

export default app;