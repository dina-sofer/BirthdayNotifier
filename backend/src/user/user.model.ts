import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    userName: String,
    // birthDate: Date
});

export interface User {
    userName: string;
    // birthDate: {type: Date};
}