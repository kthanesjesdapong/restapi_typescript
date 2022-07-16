import SessionModel from "../models/session.model";

//Function to create the session, We're creating it with the userId, and the userAgent.
export async function createSession(userId: string, userAgent: string) {

    const session = await SessionModel.create({ user: userId, userAgent });

    return session.toJSON();
}