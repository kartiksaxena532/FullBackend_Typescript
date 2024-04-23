import { Request,Response,NextFunction } from "express";
import cloudinary from "../config/cloudinary";
const createBook= async(req:Request,res:Response , next: NextFunction)=>{

    //const {} = req.body;
    const uploadResult = await cloudinary.uploader.upload('filepath',{

        
    })
    console.log("files", req.files);
res.json({});


}

export default createBook;