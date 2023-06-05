import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fname:{
        type:String
    
    },
    lname:{
        type:String
     
    },
    email:{
        type:String
        // lowercase:true
        // unique:true
    },
    password:{
        type:String
    }
    // profileImage:{type:String},
    // role:{
    //     type:String,
    //     default:"user"
    // },
    
      // const profileImage = req.file.path;
},
{timestamps:true})

const User=mongoose.model('user',userSchema);
export default User;