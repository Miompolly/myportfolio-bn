import userController from "../controllers/userController";
import express from "express";
const userRouter=express.Router();
import multer from "multer";
const upload=multer();


userRouter.post("/createUser", upload.single("profileImage"), userController.createUser);
userRouter.get("/getUsers/",userController.getUsers);
userRouter.get("/getUser/:id",userController.getUser);

export default userRouter;
