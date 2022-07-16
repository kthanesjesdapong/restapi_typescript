import { Express, Request, Response } from 'express';
import { createUserHandler } from '../controller/user.controller';
import validateResource from '../middleware/validateResource';
import { createUserSchema } from '../schema/user.schema';



//This is where all of our routes are going to live
//Notice we imported our types from Express, {Express,Request,Response}

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

    //In our app.post we're passing our middleware function and sending it a schema
    app.post("/api/users", validateResource(createUserSchema), createUserHandler);

}

export default routes;