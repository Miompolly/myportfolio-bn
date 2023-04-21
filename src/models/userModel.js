import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{type:String},
    role:{
        type:String,
        default:"user"
    },
    
      // const profileImage = req.file.path;
},
{timestamps:true})

const User=mongoose.model('User',userSchema);
export default User;