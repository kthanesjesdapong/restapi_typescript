//Providing schema for requests in the middleware, and validate requests against the schema.

import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

//Currying
const validate =
    (schema: AnyZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse({
                    body: req.body,
                    query: req.query,
                    params: req.params
                });
                next();
            } catch (e: any) {
                res.status(400).send(e.errors);
            }
        };

export default validate;