import express from "express";
import userRouter from "./user.route";

const indexRouter = express.Router();
indexRouter.use ("/user",userRouter);
export default indexRouter;