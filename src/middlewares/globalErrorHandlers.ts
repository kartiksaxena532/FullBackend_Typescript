import createHttpError, { HttpError } from "http-errors";
import express,{NextFunction, Response,Request} from "express";

import { config } from "../config/config";
//global error handlers type of middleware 

const globalErrorHandler= ((err:HttpError,req : Request, res :Response, next :NextFunction) => {
    const statusCode = err.statusCode || 500;
 
    return res.status(statusCode).json({ 
 message:err.message, 
 errorStack: config.env ==="development" ? err.stack: "" , //not used in production so use config file instead
 
    });
 
 
 });

 export default globalErrorHandler;