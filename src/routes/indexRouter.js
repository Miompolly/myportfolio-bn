import express from "express";
import userRouter from "./user.route";
import blogRouter from "./blogRoute";

const indexRouter = express.Router();
indexRouter.use ("/user",userRouter);
indexRouter.use("/blog",blogRouter);
export default indexRouter;