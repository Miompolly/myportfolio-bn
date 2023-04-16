import userController from "../controllers/userController";
import express from "express";
const userRouter=express.Router();
import multer from "multer";
const upload=multer();
import uploadImages from "../uploader/uploadImages";


userRouter.post("/createUser", uploadImages("profileImage"), userController.createUser);
userRouter.get("/getUsers/",userController.getUsers);
userRouter.get("/getUser/:id",userController.getUser);
userRouter.delete("/delete/:id",userController.deleteUser);

export default userRouter;
