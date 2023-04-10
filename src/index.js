const express=require("express");
const path=require("path");
const cors=require("cors");
const dotenv=require("dotenv");
import dbConnect from "./database/db";
import mongoose from "mongoose";
import swaggerDocs from "./api-docs/swagger";
import indexRouter from "./routes/indexRouter";



const app=express();
app.use(cors({origin:'*',methods:['GET','POST','DELETE','UPDATE','PUT','PUT','PATCH']}));

app.use(express.json());
app.use("/api",indexRouter);

dotenv.config();
swaggerDocs(app); 
const port=process.env.PORT ? process.env.PORT:3000;
app.listen(port,()=>{
    console.log(`App is listening on port : ${port}`)
})
app.use("/",(req,res)=>{
    res.send("Welcome to my portfolio");
})

dbConnect();

