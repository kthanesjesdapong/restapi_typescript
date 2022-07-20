import { verify } from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';
import { verifyJwt } from '../utils/jwt.utils';

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {



    //Bearer refers to the Bearer of the token
    //We're removing Bearer from the token
    const accessToken = get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
    );



    if (!accessToken) {
        return next();
    }


    const { decoded } = verifyJwt(accessToken, 'accessTokenPublicKey');


    //If decoded exists we are going to store decoded within res.locals.user
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    return next();
};

export default deserializeUser;