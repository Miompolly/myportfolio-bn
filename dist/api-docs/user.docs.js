"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var createUser = {
  tags: ["Users"],
  description: "Create user",
  requestBody: {
    content: {
      "Application/json": {
        schema: {
          type: "object",
          properties: {
            fname: {
              type: "string",
              description: "First Name",
              example: "Joel"
            },
            lname: {
              type: "string",
              description: "Last Name",
              example: "MINANI"
            },
            email: {
              type: "string",
              description: "Email",
              example: "youremail@gmail.com"
            },
            password: {
              type: "string",
              description: "Password",
              example: "User123"
            },
            profileImage: {
              type: "string",
              format: "binary",
              description: "Profile image of the user"
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: "OK",
      content: {
        "Application/json": {
          schema: {
            type: "object"
          }
        }
      }
    }
  }
};

///get users

var getUsers = {
  tags: ["Users"],
  description: "To get  Users",
  responses: {
    200: {
      description: "OK",
      content: {
        "Application/json": {
          schema: {
            type: "object"
          }
        }
      }
    }
  }
};
var userRouteDoc = {
  "/api/user/createUser": {
    post: createUser
  },
  "/api/user/getUsers": {
    get: getUsers
  }
};
var _default = userRouteDoc;
exports["default"] = _default;