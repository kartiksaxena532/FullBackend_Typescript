import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

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

//process
//response
  res.json({message:"user created success"})
};

export { createUser };
