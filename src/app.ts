import express from 'express';
import dotenv from 'dotenv';
import userAuthRoutes from './routes/userAuth.routes';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/user-auth', userAuthRoutes);

export default app;