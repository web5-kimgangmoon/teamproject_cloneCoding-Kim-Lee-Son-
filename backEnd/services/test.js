// import session from "express-session";
// import FileStor from "session-file-store";
// const FileStore = FileStor(session);

// export default [
//   session({
//     resave: true,
//     saveUninitialized: true,
//     secret: "test",
//     name: "user-session",
//     store: new FileStore({
//       reapInterval: 10,
//       path: "./test-session",
//     }),
//     cookie: {
//       maxAge: 60 * 1000,
//     },
//   }),
//   (req, res) => {
//     try {
//       req.session.user = 1;
//       // console.log(req.session.testuser);
//       res.json({ re: "OK" });
//     } catch (err) {
//       console.error(err);
//       res.json({ error: err.message });
//     }
//   },
// ];
// // export default router;
// // const upload = multer({
// //   storage: multer.diskStorage({
// //     destination: (req, file, callback) => {
// //       callback(null, "./uploads");
// //     },
// //     filename: (req, file, callback) => {
// //       const tempName = Date.now() + "_" + file.originalname;
// //       // imgs.push(tempName);
// //       callback(null, tempName);
// //     },
// //   }),
// // });

// // export default [
// //   upload.array("upload"),
// //   (req, res) => {
// //     console.log(req.files);
// //     const files = req.files;
// //     const fileUrls = [];
// //     files.forEach((item) => {
// //       fileUrls.push(`http://localhost:3001/imgs/${item.filename}`);
// //     });

// //     console.log(fileUrls);

// //     res.json({
// //       uploaded: true,
// //       // url: fileUrl,
// //       urls: fileUrls,
// //     });
// //   },
// // ];
