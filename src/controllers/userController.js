import User from "../models/userModel";
import cloudinary from "../uploader/cloudinary";

class userController {
  static async createUser(req, res) {
    try {
   
      // const profileImage = req.file.path;

      console.log(req.body)
      const user =await new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        // profileImage
      });

     
      await user.save();
      res.status(201).json({
        status: "success",
        data: user,
      });
      // console.log("User created successfull");
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
 static async getUser(req, res) {
  try {
    const user = await User.findOne({ id: req.params.id });
    console.log(user);

    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error.message,
    });
  }
}


static async deleteUser(req, res) {
  try {
    const user = await User.findOneAndDelete(req.params.id );

    if (!user) {
      // User not found
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    // User successfully deleted
    return res.status(204).json({
      status: 'success',
      message: 'User deleted'
    });
  } catch (error) {
    // Generic error message for server-side errors
    return res.status(500).json({
      status: 'error',
      message: 'An error occurred while deleting the user'
    });
  }
}

static async loginUser(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Check if email and password were provided
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide an email and password',
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect email or password',
      });
    }

    // Check if password is correct
    if (user.password !== password) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect email or password',
      
      });
      
    }

    // Login successful
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

}

export default userController;
