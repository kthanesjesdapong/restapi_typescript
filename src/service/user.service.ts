import { DocumentDefinition, FilterQuery } from 'mongoose';
import { omit } from 'lodash';
import UserModel, { User } from '../models/user.model';

//DocumentDefinition is a generic type, so import our User interface that comes from our UserDocuments

//We use the Omit flag and omit createAt, updatedAt because it is generated by mongoose when the user is created
export async function createUser(input: DocumentDefinition<Omit<User, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {

    try {
        //We're calling our UserModel, and we're going to be creating it based on the user's input.
        //This is going to be used in our createUserHandler Function
        const user = await UserModel.create(input);
        return omit(user.toJSON(), 'password');
    } catch (e: any) {
        throw new Error(e);
    }
}
// When we destructure props in TS, you assign the typing following the destructuring
export async function validatePassword({ email, password }: {
    email: string; password: string;
}) {

    const user = await UserModel.findOne({ email });

    if (!user) {
        return false;
    }

    //If the password is correct from comparePassword it is going to return to us the user Object without the password.
    //This refers to the model and not the interface | 
    const isValid = await user.comparePassword(password);

    if (!isValid) return false;

    //User Password being returned.
    return omit(user.toJSON(), 'password');

}

export async function findUser(query: FilterQuery<User>) {
    return UserModel.findOne(query).lean();
}