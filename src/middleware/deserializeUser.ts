import { verify } from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';
import { reIssueAccessToken } from '../service/session.service';
import { verifyJwt } from '../utils/jwt.utils';

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {



    //Bearer refers to the Bearer of the token
    //We're removing Bearer from the token
    const accessToken = get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
    );

    //Grabbing our refresh token from the headers
    const refreshToken = get(req, 'headers.x-refresh');


    if (!accessToken) {
        return next();
    }


    const { decoded, expired } = verifyJwt(accessToken, 'accessTokenPublicKey');


    //If decoded exists we are going to store decoded within res.locals.user
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    //If their token is expired AND they have a refreshToken
    if (expired && refreshToken) {

        //newAccessToken can be of type string | boolean val
        let newAccessToken: any;


        newAccessToken = await reIssueAccessToken({ refreshToken });



        //If we have a newAccessToken, we're going to set the newAccessToken to our header
        if (newAccessToken) {
            res.setHeader('x-access-token', newAccessToken);
        }

        //Let's verifyJwt again
        const result = verifyJwt(newAccessToken, 'refreshTokenPublicKey');

        //attach to res.locals.user
        res.locals.user = result.decoded;

    }

    return next();
};

export default deserializeUser;