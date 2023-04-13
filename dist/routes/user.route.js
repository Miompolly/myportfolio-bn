"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("multer"));
var userRouter = _express["default"].Router();
var upload = (0, _multer["default"])();
userRouter.post("/createUser", upload.single("profileImage"), _userController["default"].createUser);
userRouter.get("/getUsers/", _userController["default"].getUsers);
userRouter.get("/getUser/:id", _userController["default"].getUser);
var _default = userRouter;
exports["default"] = _default;