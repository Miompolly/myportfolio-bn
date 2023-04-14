const createUser = {
    tags : ["Users"],
    description : "Create user",
    requestBody : {
        content : {
            "multipart/form-data" : {
                schema : {
                    type : "object",
                    properties : {
                        fname : {
                            type : "string",
                            description : "First Name",
                            example : "Joel"
                        },
                        lname : {
                            type : "string",
                            description : "Last Name",
                            example : "MINANI"
                        },
                        email : {
                            type : "string",
                            description : "Email",
                            example : "youremail@gmail.com"
                        },
                        password : {
                            type : "string",
                            description : "Password",
                            example : "User123"
                           
                        },

                        profileImage:{
                           type : "array",
                           items : {
                            type : "string",
                            format : "binary",
                            required :true,
                            minItems :1
                           }
                        }
         

                    }
                }
            }
        }
    } ,
    responses : {
        201 : {
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
    tags : ["Users"],
    description : "To get  User",

    parameters :[
        {
           name : "id",
           in : "path",
           required :true,
           description :"User Id",
           type : "string",
           example : "643003974919a0c5cb54b793"

        }
       
    ] ,
    responses : {
        200 : {
            description : "User Object",
            content : {
                "Application/json" : {
                    schema : {
                        type:"object",
                        example:{
                            _id: "643003974919a0c5cb54b793",
                            fname: "Joel",
                            lname: "Minani",
                            email: "jojo@gmail.com",
                            password: "test123",
                            profileImage :"gdgdgdggdgd",
                            role :"user",
                            createdAt: "2023-04-07T11:51:32.424Z",
                            updatedAt: "2023-04-07T11:51:32.424Z",
                            __v: 0
                          
                    },
                    }
                }
            }
        },
        404:{
            description:"user  not found"
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
    }
};
export default userRouteDoc;