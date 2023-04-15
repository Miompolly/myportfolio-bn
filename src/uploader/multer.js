import multer from 'multer';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    if (!extension.match(/\.jpg|\.jpeg|\.png|\.PNG$/)) {
      cb(new Error('Unsupported file format'));
      return;
    }
    cb(null, true);
  },
});

export default upload;
