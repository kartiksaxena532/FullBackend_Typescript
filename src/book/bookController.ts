import { Request,Response,NextFunction } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

const createBook= async(req:Request,res:Response , next: NextFunction)=>{

res.json({message:"book created"});


}

export default createBook;