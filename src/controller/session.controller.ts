import { Request, Response } from 'Express';
import { validatePassword } from '../service/user.service';
import { createSession, findSessions } from '../service/session.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';


export async function createUserSessionHandler(req: Request, res: Response) {
    //Validate the User's password

    const user = await validatePassword(req.body);


    //If the user doesn't exist
    if (!user) {
        return res.status(401).send("Invalid email or password");
    }

    //Create a User session
    //It's an async function and when we create the Session we're gonna get the user-agent
    const session = await createSession(user._id, req.get('user-agent') || '');



    //Create an Access token
    const accessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('accessTokenTtl') }
        //15 Minutes
    );

    //Create a Refresh token
    const refreshToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('accessTokenTtl') }
    );

    //Return Access && Refresh tokens

    return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHander(req: Request, res: Response) {

    //Getting the User's Id

    const userId = res.locals.user._id;

    //Finding the Sessions associated with The userId
    //We don't want to get any sessions marked as invalid

    const sessions = await findSessions({ users: userId, valid: true });
    console.log(sessions);
    return res.send(sessions);
}

