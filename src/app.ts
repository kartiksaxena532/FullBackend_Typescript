
import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHandlers";
import userRouter from "./user/userRouter";



const app = express();
//midddleware used for  json parsing
app.use(express.json());
app.get("/", (req, res,next) => {

    res.json({ message: "Hello kartik welcome to backend" });

}
); 
app.get("/kartik", (req, res,next) => {

    res.json({ message: "Hello kartik welcome" });

}
);

app.use("/api/users", userRouter);

app.use(globalErrorHandler)

export default app;