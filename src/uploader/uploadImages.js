
import upload from "./multer";

const uploadImages = (name) => {
  return async (req, res, next) => {
    try {
      upload.single(name)(req, res, (err) => {
        // upload.array
        if (err) {
          return res.status(400).json({ status: "fail", error: err.message });
        }

        next();
      });
    } catch (error) {
      return error.message;
    }
  };
};

export default uploadImages;