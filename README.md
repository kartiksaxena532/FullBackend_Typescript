npm init 
npm install -D ts-node nodemon @types/node  ( D for dev dependencies typescripr ki node and the nodemon for running server continously)4
 dev dependencies ko hum sirf developemnet like type script mein use karte hai 
 baaki in prodeuction usko javascript mein transpile karte hai 
 
 ab humne ek cheez aur li hai jo hai ts-node isse ye hota hai ki typescript ka output dekhne 
 ke liye humko use javascript mein karna padega toh hum ts-node se directly output dekh sakte hai

 aur node ke types ko bhi install kar liya hai isme

fir "tsc" jo jo typescript ka compiler hai usko bhi install kar liya hai

npm tsc --init


//to remove node modules or other faltu files

"git rm -r --cached .
git add .
git commit -m "remove gitignore files"
git push" 


//why add eslint

npm init @eslint/config 

eslint ko pata hota hai ki kosni bad pratice use hui hai code mein 
isko fix karne mein help krta hai toh include every time in evry project


// express setup

express ko alag se src mein banana is a good practice kyuki ye jo hai 
sirf app.ts mein app banane ka kaam hoga na ki server ko chlanae ka kaam hoga 
isse readeablity bhadegi and isse humko pata chalega ki konsa file
kya kaam kar raha hai


used to give the differetiation between the production and the 
development part so hum develoment mein "err.stack" bhej ke saara error padh sakte hai
ki kisme kya error aaya hai baaki isko env mein store kardo mast.

errorStack: config .env ==="development" ? err.stack: "" , 

NODE_ENV=development 
//PRODUCTION LIKHENGE AGAR PRODUCTION HUA TOH


//way of throwing errors in js using http errors pacakge
import { HttpError } from 'http-errors
    const error = createHttpError(400,"Not Found");
throw error;

// we use a new approach other than MVC archietechture ko ki hai jis cheeze ki 
zaruart hai uska ek folder banao aur usme hi mvc krdo 

jaise ki hume user ki zarurat hai toh uska ek folder banao aur usme hi saare api ko bind do
aur usme hi saare routes ko bind do

//ab password ko hash karne ke liye hum bcrypt use karenge
const bcrypt = require('bcrypt');
const saltRounds = 10; //same string ka same hash ban gya toh pattern detect ho jaayega isislite we use salt round

hs256 algoritm 
(symmetric key wala sysytem jo cyber mein padha tha) 
se hota hai hashing aur
 ek tha iska 
rs256 algo 
(asymmetric key wala sysytem jo cyber mein padha tha)
jswebtoken ki website pe dekh sakte hai isko

// we use status code 201 for the creation of new user
// we use status code 200 for the successfull operation

// we use ulter to make the files upload as the multipart and the use of multer is as a middleware in the book.router path

bookRouter.post("/",()=>{}, createBook); middleware ka part beech mien jaise hai waise lagega. but this is a primitive way 

ab hum ek naya multer ka function banake usko use kar sakte hai

jo ki ek path lega destinatioon ka using path form node in book router



const upload = multer({

    
    dest : path.resolve(__dirname,"../../public/data/uploads"), // basically current directory name aur nayei storage aur uska path ko bta rah hai toh ye path banana padega manually
    limits :{fileSize:3e7}  //30 mb approx 30*1000*1000 bytes but like hota 1024 hai approx kar liya

});
// as a middleware  use hoga
bookRouter.post("/",upload.fields([

    {name: "coverImage" ,maxCount: 1},
    {name:'file' , maxCount:1},
    
]), createBook); //checkout upload ke methods like single etc.