import {User} from "./user";
import mongoose, {Document, Model, Schema} from 'mongoose';

export interface UserDocument extends Document, User {
    _id: string,
    username: string,
    hash: string,
}

const userSchema = new Schema<UserDocument>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
});

export const generateUserModel = (dbUrl: string): Model<UserDocument> =>
    mongoose.createConnection(dbUrl).model<UserDocument>('User', userSchema);