import blogController from "../controllers/blogController";
import express from "express";
import multer from "multer";

const blogRouter=express.Router();
const upload = multer();
import uploadImages from "../uploader/uploadImages";

blogRouter.post("/createBlog",uploadImages("blogImage"),blogController.createBlog);

export default blogRouter;