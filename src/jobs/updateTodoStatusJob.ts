import cron from 'node-cron';
import Todo from '../models/Todo';

export const scheduleUpdateOfTodoStatus = () => {
    //runs cron job at midnight
    cron.schedule('0 0 * * *', async () => {
        await Todo.updateMany(
            { dueDate: { $lt: new Date() }, completed: false },
            { $set: { completed: true } }
        );
        console.log('Updated expired todos as completed');
    });
    // for testing can update it to run every minute
    // cron.schedule('* * * * *', async () => {
    //     await Todo.updateMany(
    //         { dueDate: { $lt: new Date() }, completed: false },
    //         { $set: { completed: true } }
    //     );
    //     console.log('✅ Cron ran and marked expired todos as completed');
    // });
};
