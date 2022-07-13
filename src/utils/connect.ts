//This is where we're going to house our db connection

import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
    const dbUri = config.get<string>('dbUri');

    try {
        await mongoose.connect(dbUri);
        logger.info('DB is connected');
    } catch (error) {
        logger.error('Could not connect to DB');
        process.exit(1);
    }
}

export default connect;