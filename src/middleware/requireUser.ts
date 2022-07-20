import { Request, Response, NextFunction } from 'express';

const requireUser = (req: Request, res: Response, next: NextFunction) => {
    //This middleware is only to be used on routes which requires a user,
    //If the user doesn't exist we send back to them a 403

    const user = res.locals.user;

    if (!user) {
        return res.sendStatus(403);
    }

    return next();
};

export default requireUser;