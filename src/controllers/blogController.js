import Blog from "../models/blogModel";
import cloudinary from "../uploader/cloudinary";

const blogController = {
  async createBlog(req, res) {
    try {
      const blogImage = req.file.path;
       console.log(req.body);
      const blog = new Blog({
          blogTitle: req.body.blogTitle,
          blogAuthor: req.body.blogAuthor,
          blogImage,
          blogText: req.body.blogText,
      });


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create blog" });
    }
  }
};

export default blogController;
