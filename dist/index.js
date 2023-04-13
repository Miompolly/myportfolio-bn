"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _db = _interopRequireDefault(require("./database/db"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _swagger = _interopRequireDefault(require("./api-docs/swagger"));
var _indexRouter = _interopRequireDefault(require("./routes/indexRouter"));
var express = require("express");
var path = require("path");
var cors = require("cors");
var dotenv = require("dotenv");
var app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use("/api", _indexRouter["default"]);
dotenv.config();
(0, _swagger["default"])(app);
var port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, function () {
  console.log("App is listening on port : ".concat(port));
});
app.use("/", function (req, res) {
  res.send("Welcome to my portfolio");
});
(0, _db["default"])();