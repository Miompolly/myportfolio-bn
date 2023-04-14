import User from "../models/userModel";
import upload from "../uploader/multer";
import cloudinary from "../uploader/cloudinary";

class userController {
  static async createUser(req, res) {

          try {
            // console.log("File",req.file)
            const result = await cloudinary.uploader.upload(req.file.path);
            const user = new User({
              fname: req.body.fname,
              lname: req.body.lname,
              email: req.body.email,
              password: req.body.password,
              profileImage: result.secure_url,
            });
            await user.save();
            res.status(201).json({
              status: "success",
              data: user,
            });
            console.log("User created");
          } catch (error) {
            res.status(400).json({
              status: "error",
              message: error.message,
            });
          }
  }

  // getusers
  static async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message,
      });
    }
  }

  // get one user
  static async getUser(req,res) {
    try {
      const user=await User.findOne({id:req.params.id});
      console.log(user);
     
      res.status(200).json({
        "status":
        "success",
        "data":user
        
      })
    }catch (error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        });
   }

}


  ///delete user  

  // static async deleteUser(req,res){
  //   try {
  //     const user = await user.findOneDelete({ _id: req.params.id });
  //     res.status(204).json({
  //       "status" :"Success",
  //       "message" :"User Deleted"
  //     })
     
  //   } catch(err){
  //     res.status(404).json({
  //       "status" :"error",
  //       "message" :error.message
  //     })
  //   }
  // }


}

export default userController;
