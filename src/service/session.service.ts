import { FilterQuery, SessionOperation } from 'mongoose';
import SessionModel, { Session } from "../models/session.model";

//Function to create the session, We're creating it with the userId, and the userAgent.
export async function createSession(userId: string, userAgent: string) {

    const session = await SessionModel.create({ user: userId, userAgent });

    return session.toJSON();
}

export async function findSessions(query: FilterQuery<Session>) {

    //.lean() returns the POJO and not the functions on attached to it


    return SessionModel.find(query);
};