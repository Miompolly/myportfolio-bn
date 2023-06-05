import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
  },
  blogAuthor: {
    type: String,
  },
  blogImage: {
    type: String,
  },
  blogText: {
    type: String,
  },
}, { timestamps: true });

const Blog = mongoose.model("blog", BlogSchema);

export default Blog;
