const express=require("express");
const path=require("path");
const cors=require("cors");
const dotenv=require("dotenv");
import dbConnect from "./database/db";
import mongoose from "mongoose";
import userRouter from "./routes/user.route";



const app=express();
app.use(cors({origin:'*',methods:['GET','POST','DELETE','UPDATE','PUT','PUT','PATCH']}));

app.use(express.json());
app.use("/api",userRouter);
app.use("/api",getUsers);
dotenv.config();
const port=process.env.PORT ? process.env.PORT:3000;
app.listen(port,()=>{
    console.log(`App is listening on port : ${port}`)
})
app.use("/",(req,res)=>{
    res.send("Welcome to my portfolio");
})

dbConnect();
