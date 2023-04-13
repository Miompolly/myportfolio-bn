import { error } from 'console';
import multer from 'multer';
const path=require("path");

// Define multer storage settings
const upload =multer({
  storage : multer.diskStorage({}),
  filename: (req, file, cb) => {
    cb(null,file.originalname);
  },
  fileFilter : (req,file,cb)=>{
    const extension =path.extname(file.originalname);
    if(!extension==".jpg" && !extension == ".jpeg" && !extension == ".png" && !extension ==".PNG"){
      cb(new error("unsupported format",false));
      return;
    }
    cb(null,true)
  }
})




export default upload;

