import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";
import userRouteDoc from "./user.docs";

dotenv.config();


const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            version : "1.0.0",
            title : " My Portfolio Backend",
            description : "My portfolio backend docs"
        
        },
        
        servers : [
            {
                url :`http://localhost:${process.env.PORT}`,
                description :"development server"
            }
        ],
        tags : [
            {
                name:"Users",description:"User routes"
                
            }
        ],
        components : {
            securitySchemes : {
                token :{
                    type: "apiKey",
                    scheme : "bearer",
                    bearerFormat:"JWT",
                    name : "token",
                    in:"header"
                }
            }
        }, 
        paths : {
...userRouteDoc
        }

    },
    apis : ["../routes/**/*.js"]
};

const swaggerSpec =swaggerJSDoc(options);

const swaggerDocs=(app)=>{
    app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
};
export default swaggerDocs;
