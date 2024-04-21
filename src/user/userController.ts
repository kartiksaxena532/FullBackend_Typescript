import { Request, Response, NextFunction, response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import {sign} from "jsonwebtoken";
import  {config} from "../config/config"
import { User } from "./userTypes";







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

// //advanced error handling hui ai neeche ke 3 mein jisme error ko detect karne ke 
//liye paad bele gaye hai kaafi saare try catch laga ke
try{
    const user = await userModel.findOne({email});
    if (!user){
        const error = createHttpError(400,"User already exist with this email")
        return next(error);
    }
}

catch(err){
return next(createHttpError(500,"Error while getting  user")) //advanced error handling

}


let newUser:User;


try{
//process
const hashedPassword = await bcrypt.hash(password,10) //salt rounds ka use hota hai password ko secure karne ke liye password
//10 sweet spot hota hai
newUser =  await userModel.create({
    name,
    email,
    password:hashedPassword //bcrypt wala
});

}
catch(err){
    return next(createHttpError(500,"Error while creating user")) //advanced error handling
}

//token generation by jwt or jsonwebtoken
try{
const token = sign({sub:newUser._id},config.jwtSecret as string, 
    {expiresIn: "7d",
        algorithm:"HS256",
    })

//response
  res.status(201).json({accessToken : token});
}
catch(err){
    return next(createHttpError(500,"Error while signing the jwt user")) //advanced error handling 
}
};











const loginUser = async (req:Request,res:Response,next:NextFunction)=>{

    const {email,password} = req.body;


    if (!email || !password){
        const error = createHttpError(400,"all feilds are required")
        return next(error);
    }

    try{
        const user = await userModel.findOne({ email });
        if (!user) {
            const error = createHttpError(404, "User not found");
            return next(error);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            const error = createHttpError(401, "Invalid credentials");
            return next(error);
        }

        const token = sign({sub:user._id},config.jwtSecret as string, 
            {expiresIn: "7d",
                algorithm:"HS256",
            })
            res.status(201).json({accessToken : token});

    }  
     catch(err){ return next(createHttpError("400", "Error while logging in user"));
}
}


export { createUser ,loginUser };
//adding new routes