import express from "express";



const app = express();

app.get("/", (req, res,next) => {

    res.json({ message: "Hello kartik welcome to backend" });

}
)

app.get("/kartik", (req, res,next) => {

    res.json({ message: "Hello kartik welcome" });

}
)

export default app;