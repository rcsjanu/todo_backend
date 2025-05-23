import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_db';
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

const disconnectDB = async (): Promise<void> => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }
};

export { connectDB, disconnectDB };
