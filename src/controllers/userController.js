import User from "../models/userModel";

class userController{
    static async createUser(req,res){
        try{
            const user=new User({
                fname:req.body.fname,
                lname:req.body.lname,
                email:req.body.email,
                password:req.body.password
            });
            await user.save();
            res.status(201).json({
              "status":"success",
              "post":user
  
            });
            console.log("User created");
        }
        
        catch(error){
            res.status(400).json({
                "status":"error",
                "message":error.message
            })
        }
    }
    // getusers

    static async getUsers(req,res) {
        try {
       const users=await User.find();
       res.status(200).json({
        "status":"success",
        "data":users
       })
        }catch (error){
            res.status(404).json({
              "status":"error",
              "message":error.message
            });
        }
    }

    ///get one users

    static async getUser(req,res) {
        try {
       const users=await User.findOne();
       res.status(200).json({
        "status":"success",
        "data":users
       })
        }catch (error){
            res.status(404).json({
              "status":"error",
              "message":error.message
            });
        }
    }

}
export default userController