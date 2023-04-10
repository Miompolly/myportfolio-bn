"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _db = _interopRequireDefault(require("./database/db"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _user = _interopRequireDefault(require("./routes/user.route"));
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
app.use("/api", _user["default"]);
app.use("/getusers", _user["default"]);
dotenv.config();
var port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, function () {
  console.log("App is listening on port : ".concat(port));
});
app.use("/", function (req, res) {
  res.send("Welcome to my portfolio");
});
(0, _db["default"])();