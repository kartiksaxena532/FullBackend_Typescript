import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";

const createUser = async (
    
    req: Request,
     res: Response, 
     next: NextFunction) => {

const {name,email,password} = req.body;

//vallidation
if(!name||!email||!password){
    const error =createHttpError(400,"all feilds are required")
    return next(error);
}
//DATABASE CALL
const user = await userModel.findOne({email});

if (user){
    const error = createHttpError(400,"User already exist with this email")
    return next(error);
}
//process
const hashedPassword = await bcrypt.hash(password,10) //salt rounds ka use hota hai password ko secure karne ke liye password
//10 sweet spot hota hai


//response
  res.json({message:"user created success"})
};

export { createUser };
