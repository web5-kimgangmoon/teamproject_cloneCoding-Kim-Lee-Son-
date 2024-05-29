import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
      const tempName = Date.now() + "_" + file.originalname;
      // imgs.push(tempName);
      callback(null, tempName);
    },
  }),
});

export default [
  upload.array("upload"),
  (req, res) => {
    console.log(req.files);
    const files = req.files;
    const fileUrls = [];
    files.forEach((item) => {
      fileUrls.push(`http://localhost:3001/imgs/${item.filename}`);
    });

    console.log(fileUrls);

    res.json({
      uploaded: true,
<<<<<<< HEAD
      url: fileUrls,
      // urls: fileUrls,
=======
      // url: fileUrl,
      urls: fileUrls,
>>>>>>> 73386c3 (multer and session)
    });
  },
];
