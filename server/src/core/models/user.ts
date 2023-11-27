import { ObjectId } from "mongodb";


export class User{
    _id: ObjectId = new ObjectId();
    username: string = "";
    password: string = "";
    birthday: Date = new Date();
    following: ObjectId[] = [];
    createAt: Date = new Date();
    updatedAt: Date = new Date();
}