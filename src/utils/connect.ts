//This is where we're going to house our db connection

import mongoose from 'mongoose';
import config from 'config';

async function connect() {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        console.log('db is connected');
    } catch (error) {
        console.error('Could not connect to db');
        process.exit(1);
    }
}

export default connect;