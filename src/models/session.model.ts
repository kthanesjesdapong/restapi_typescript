import mongoose, { Schema, model } from "mongoose";
import bcrpyt from 'bcrypt';
import config from 'config';
import { User } from './user.models';

//Interface representing a document in MongoDB
export interface Session extends mongoose.Document {
    user: User['_id'],
    valid: boolean;
    userAgent: string,
    createdAt: Date,
    updatedAt: Date,
}



//Schema
//Passing in our interface for our Schema typing
const sessionSchema = new Schema<Session>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, required: true },

    // Storing the user's browser that they created the session with
    // Can use the userAgent to list out the user's session in an interface to tell the user they logged in on x Days at x Time.
    userAgent: { type: String }
}, {
    timestamps: true
});




//Model
const SessionModel = model<Session>("Session", sessionSchema);

export default SessionModel;