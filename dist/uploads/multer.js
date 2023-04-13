"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
// Define multer storage settings
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer middleware
var upload = (0, _multer["default"])({
  storage: storage
});
var _default = upload;
exports["default"] = _default;