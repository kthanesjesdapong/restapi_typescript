import { FilterQuery, UpdateQuery } from 'mongoose';
import SessionModel, { Session } from "../models/session.model";
import { verifyJwt, signJwt } from '../utils/jwt.utils';
import { get } from 'lodash';
import { findUser } from './user.service';
import config from 'config';

//Function to create the session, We're creating it with the userId, and the userAgent.
export async function createSession(userId: string, userAgent: string) {

    const session = await SessionModel.create({ user: userId, userAgent });

    return session.toJSON();
}

export async function findSessions(query: FilterQuery<Session>) {

    //.lean() returns the POJO and not the functions on attached to it


    return SessionModel.find(query);
};

// updateParams is of type UpdateQuery and we can pass the Session documents that we defined earlier.
export async function updateSession(query: FilterQuery<Session>, update: UpdateQuery<Session>) {

    //finds one session with our query and what we want updated.

    return SessionModel.updateOne(query, update);
};

//If you're passing in a prop from an Obj into a function, you have to destructure it again when you're typing the parameter
export async function reIssueAccessToken({ refreshToken }: { refreshToken: string; }): Promise<string | boolean> {

    //Destructuring decoded from verifyJwt with out refreshToken
    const { decoded } = verifyJwt(refreshToken, 'refreshTokenPublicKey');

    //If either decoded is empty or there is no ID we just return false;
    //Previously, we were trying to look up the session by id but there's a field session underneath which we can grab.
    if (!decoded || !get(decoded, 'session')) return false;


    const session = await SessionModel.findById(get(decoded, 'session'));

    //If we don't have a session, or if the session is invalid return false;
    if (!session || !session.valid) return false;

    //we can find the id because it'll be attached to our user.
    const user = await findUser({ _id: session.user });

    //If we don't have a user
    if (!user) return false;

    const accessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get('accessTokenTtl') }
        //15 Minutes
    );

    return accessToken;
}