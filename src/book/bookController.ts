import { Request,Response,NextFunction } from "express";
import cloudinary from "../config/cloudinary";
import path from "node:path";


const createBook= async(req:Request,res:Response ,next: NextFunction)=>{
    try{
    console.log("files", req.files);
 
    const files =  req.files as{ [filename :string] : Express.Multer.File[]}; // file type string karke multer ke file type array se match kar diya hai
    const coverImageMimeType = files.coverImage[0].mimetype.split("/").at(-1);

   const fileName = files.coverImage[0].filename;

   const filepath = path.resolve(__dirname,"../../public/data/uploads" , fileName) //you can use join also ,, basically path aur uska filename ko join kiya hai

    const uploadResult = await cloudinary.uploader.upload(filepath,{
        filename_override: fileName,
        folder: 'book-covers',
        format: coverImageMimeType,

    })
    

    console.log("uploadResult",uploadResult);


res.json({});
    }
catch(err){
    console.log(err);
}


};


export { createBook};


