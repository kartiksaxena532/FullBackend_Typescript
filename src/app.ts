
import express from "express";

import globalErrorHandler from "./middlewares/globalErrorHandlers";



const app = express();

app.get("/", (req, res,next) => {

    res.json({ message: "Hello kartik welcome to backend" });

}
); 
app.get("/kartik", (req, res,next) => {

    res.json({ message: "Hello kartik welcome" });

}
);
app.use(globalErrorHandler)

export default app;