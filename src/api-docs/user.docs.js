const createUser = {
    tags: ["Users"],
    description: "Create user",
    requestBody: {
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              fname: {
                type: "string",
                description: "First Name",
                example: "Joel",
              },
              lname: {
                type: "string",
                description: "Last Name",
                example: "MINANI",
              },
              email: {
                type: "string",
                description: "Email",
                example: "youremail@gmail.com",
              },
              password: {
                type: "string",
                description: "Password",
                example: "User123",
              },
              profileImage: {
                type: "array",
                items: {
                  type: "string",
                  format: "binary",
                  required: true,
                  minItems: 1,
                
                },
                // Add the "name" attribute to identify the file input element in the request
                // Make sure that the "name" attribute matches the parameter name used in your Node.js code
                name: "profileImage",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
            },
          },
        },
      },
    },
  };
  
///get users




const getUsers = {
    tags : ["Users"],
    description : "To get  Users",
   
    responses : {
        200 : {
            description : "OK",
            content : {
                "Application/json" : {
                    schema : {
                        type : "object"
                    }
                }
            }
        }
    } 
}

///getuser

const getUser = {
    tags: ['Users'],
    description: 'To get a user by ID',
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'User ID',
        type: 'string',
        example: '643003974919a0c5cb54b793',
      },
    ],
    responses: {
      200: {
        description: 'User object',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              example: {
                _id: '643003974919a0c5cb54b793',
                fname: 'Joel',
                lname: 'Minani',
                email: 'jojo@gmail.com',
                password: 'test123',
                profileImage: 'gdgdgdggdgd',
                role: 'user',
                createdAt: '2023-04-07T11:51:32.424Z',
                updatedAt: '2023-04-07T11:51:32.424Z',
                __v: 0,
              },
            },
          },
        },
      },
      404: {
        description: 'User not found',
      },
    },
  };
  
// delete user

const deleteUser = {
    tags:['Users'],
    description:"Delete the User by Id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"Id of User",
            type:"string",
            required:true,
            example:"643003974919a0c5cb54b793"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}



const userRouteDoc = {
    "/api/user/createUser": {
        post : createUser    
    },
    "/api/user/getUsers": {
        get : getUsers    
    },

    "/api/user/getUser/{id}": {
        get : getUser   
    },
    "/api/user/deleteUser/{id}": {
        delete:deleteUser
    }
};
export default userRouteDoc;