import 'dotenv/config';
import express from 'express';
import config from "config";
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes/index';
import deserializeUser from './middleware/deserializeUser';

const port = config.get<number>(`port`);

const app = express();



//Body parsing middleware
//Without this by the time it gets to our middlewares we defined, its undefined
app.use(express.json());

//Making sure that deserializeUser is called on every route.
app.use(deserializeUser);


app.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);

    await connect();

    routes(app);
});