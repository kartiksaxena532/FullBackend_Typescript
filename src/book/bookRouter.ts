import path from "node:path"
import express from "express"
import createBook from "./bookController";
import multer from "multer";
const bookRouter = express.Router();

const upload = multer({

    
    dest : path.resolve(__dirname,"../../public/data/uploads"), // basically current directory name aur nayei storage aur uska path ko bta rah hai toh ye path banana padega manually
    limits :{fileSize:3e7}  //30 mb approx 30*1000*1000 bytes but like hota 1024 hai approx kar liya

});

bookRouter.post("/",upload.fields([

    {name: "coverImage" ,maxCount: 1},
    {name:'file' , maxCount:1},

]), createBook); //checkout upload ke methods like single etc.
 

export default bookRouter;
 