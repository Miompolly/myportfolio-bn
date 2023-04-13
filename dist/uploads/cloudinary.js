"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cloudinary = _interopRequireDefault(require("cloudinary"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
_cloudinary["default"].config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SCRET
});
var _default = _cloudinary["default"];
exports["default"] = _default;