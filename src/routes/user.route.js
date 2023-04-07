import userController from "../controllers/userController";
import express from "express";
const userRouter=express.Router();

userRouter.post("/createUser",userController.createUser);
userRouter.get("/getUsers/",userController.getUsers);
export default userRouter;
