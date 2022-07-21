import mongoose, { Schema, model } from "mongoose";
import bcrpyt from 'bcrypt';
import config from 'config';

//interface representing a document in MongoDB
export interface User extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    comparePassword(candidatePassword: string): Promise<Boolean>;
}



//Schema
const userSchema = new Schema<User>({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});


// If someone puts in their password we do not want to store the user's password in plain text, we're going to want to hash their password and store the hash version of it
userSchema.pre('save', async function (next: any) {
    let user = this as User;

    //If the user's password wasn't modified
    if (!user.isModified('password')) {
        return next();
    }

    //Pull from config file the salt rounds
    const salt = await bcrpyt.genSalt(config.get<number>('saltWorkFactor'));
    //Hash our password
    const hash = await bcrpyt.hash(user.password, salt);

    //Set the user's pw as the hash
    user.password = hash;

    return next();
});

// Because it's an async function it's going to return a Promise that returns a boolean
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as User;

    return bcrpyt.compare(candidatePassword, user.password).catch((e) => false);
};

//Model
const UserModel = model<User>("User", userSchema);

export default UserModel;