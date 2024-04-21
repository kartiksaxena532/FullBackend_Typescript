import { User } from "../user/userTypes";

export interface Book{
    _id : String;
    title:String;
    author: User;
    coverImage:String;
    genre:String;
    file:String;
    createdAt:Date;
    updatedAt:Date;
}