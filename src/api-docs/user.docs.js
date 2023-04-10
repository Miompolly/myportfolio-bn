const createUser = {
    tags : ["Users"],
    description : "Create user",
    requestBody : {
        content : {
            "Application/json" : {
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



const userRouteDoc = {
    "/api/user/createUser": {
        post : createUser    
    },
    "/api/user/getUsers": {
        get : getUsers    
    }
};
export default userRouteDoc;