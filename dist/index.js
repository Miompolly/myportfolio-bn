"use strict";

var express = require("express");
var path = require("path");
var cors = require("cors");
var dotenv = require("dotenv");
var app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PUT', 'PATCH']
}));
app.use(Express.json());
dotenv.config();
var port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, function () {
  console.log("App is listening on port : ".concat(port));
});