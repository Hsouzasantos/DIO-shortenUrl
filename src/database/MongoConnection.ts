import { config } from 'config/Constants';
import mongoose from 'mongoose';

export default class MongoConnection {
    public async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Database connected');
        } catch (err) {
            console.error(err.message);
            process.exit(1);
        }
    }
}