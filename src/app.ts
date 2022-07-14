import 'dotenv/config';
import express from 'express';
import config from "config";
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes/index';

const port = config.get<number>(`port`);

const app = express();


//Body parsing middleware
//Without this by the time it gets to our middlewares we defined, its undefined
app.use(express.json());


app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
});