"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _express = _interopRequireDefault(require("express"));
var userRouter = _express["default"].Router();
userRouter.post("/createUser", _userController["default"].createUser);
userRouter.get("/getUsers/", _userController["default"].getUsers);
var _default = userRouter;
exports["default"] = _default;