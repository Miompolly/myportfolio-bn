"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _user = _interopRequireDefault(require("./user.docs"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
_dotenv["default"].config();
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: " My Portfolio Backend",
      description: "My portfolio backend docs"
    },
    servers: [{
      url: "http://localhost:".concat(process.env.PORT),
      description: "development server"
    }],
    tags: [{
      name: "Users",
      description: "User routes"
    }],
    components: {
      securitySchemes: {
        token: {
          type: "apiKey",
          scheme: "bearer",
          bearerFormat: "JWT",
          name: "token",
          "in": "header"
        }
      }
    },
    paths: _objectSpread({}, _user["default"])
  },
  apis: ["../routes/**/*.js"]
};
var swaggerSpec = (0, _swaggerJsdoc["default"])(options);
var swaggerDocs = function swaggerDocs(app) {
  app.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerSpec));
};
var _default = swaggerDocs;
exports["default"] = _default;