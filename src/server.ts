import dotenv from 'dotenv';
import app from './app';
import { connectDB, disconnectDB } from './config/db';

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on('SIGINT', async () => {
    await disconnectDB();
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
});