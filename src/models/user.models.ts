import mongoose from "mongoose";
import bcrpyt from 'bcrypt';
import config from 'config';

//Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

//Model
const UserModel = mongoose.model("User", userSchema);

export default UserModel;