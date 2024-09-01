import express from "express";
import dotenv from "dotenv"
import db from "./db.js"
import userRouter from "./routers/user.route.js";
import cors from 'cors'
import blogRouter from "./routers/blog.route.js"


const app = express();
dotenv.config()
app.use(cors())
app.use(express.static('./uploads'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', userRouter);
app.use('/api', blogRouter);

const port = process.env.port;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}` )
})

