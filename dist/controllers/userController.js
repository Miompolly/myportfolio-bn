"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _userModel = _interopRequireDefault(require("../models/userModel"));
var _multer = _interopRequireDefault(require("../uploads/multer"));
var _cloudinary = _interopRequireDefault(require("../uploads/cloudinary"));
var userController = /*#__PURE__*/function () {
  function userController() {
    (0, _classCallCheck2["default"])(this, userController);
  }
  (0, _createClass2["default"])(userController, null, [{
    key: "createUser",
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              try {
                (0, _multer["default"])(req, res, /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err) {
                    var result, user;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!err) {
                            _context.next = 4;
                            break;
                          }
                          console.log(err);
                          _context.next = 18;
                          break;
                        case 4:
                          _context.prev = 4;
                          _context.next = 7;
                          return _cloudinary["default"].uploader.upload(req.file.path);
                        case 7:
                          result = _context.sent;
                          user = new _userModel["default"]({
                            fname: req.body.fname,
                            lname: req.body.lname,
                            email: req.body.email,
                            password: req.body.password,
                            profileImage: result.secure_url
                          });
                          _context.next = 11;
                          return user.save();
                        case 11:
                          res.status(201).json({
                            status: "success",
                            data: user
                          });
                          console.log("User created");
                          _context.next = 18;
                          break;
                        case 15:
                          _context.prev = 15;
                          _context.t0 = _context["catch"](4);
                          res.status(400).json({
                            status: "error",
                            message: _context.t0.message
                          });
                        case 18:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, null, [[4, 15]]);
                  }));
                  return function (_x3) {
                    return _ref.apply(this, arguments);
                  };
                }());
              } catch (error) {
                res.status(400).json({
                  status: "error",
                  message: error.message
                });
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }
      return createUser;
    }() // getusers
  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var users;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _userModel["default"].find();
            case 3:
              users = _context3.sent;
              res.status(200).json({
                status: "success",
                data: users
              });
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              res.status(404).json({
                status: "error",
                message: _context3.t0.message
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function getUsers(_x4, _x5) {
        return _getUsers.apply(this, arguments);
      }
      return getUsers;
    }() // get one user
  }, {
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _userModel["default"].findOne({
                _id: req.params.id
              });
            case 3:
              user = _context4.sent;
              res.status(200).json({
                status: "success",
                data: user
              });
              _context4.next = 10;
              break;
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              res.status(404).json({
                status: "error",
                message: _context4.t0.message
              });
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function getUser(_x6, _x7) {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }]);
  return userController;
}();
var _default = userController;
exports["default"] = _default;