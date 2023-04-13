"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user.route"));
var indexRouter = _express["default"].Router();
indexRouter.use("/user", _user["default"]);
var _default = indexRouter;
exports["default"] = _default;