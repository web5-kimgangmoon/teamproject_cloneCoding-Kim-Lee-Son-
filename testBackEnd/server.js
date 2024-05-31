import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import multer from "multer";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import db from "./models/index.js";
import store from "session-file-store";

const app = express();
dotenv.config();

app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  if (process.env.NODEENV == "deploy") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(
  cors({
    origin: [/http:\/\/localhost*/, /http:\/\/127.0.0.1:*/],
    credentials: true,
  })
);

// app.use(cors());
app.use(cookieParser(process.env.COOKIESECRET | "V"));

// const FileStore = store(session);
// app.use(
//   session({
//     resave: true,
//     saveUninitialized: true,
//     name: "testSession",
//     secret: "dlksajdkl",
//     store: new FileStore({
//       reapInterval: 10,
//       path: "./sessions",
//     }),
//     // store : new FileStore({reapInterval: 10, path: "./test-session"});
//     cookie: {
//       httpOnly: true,
//       maxAge: 10 * 1000,
//       signed: true,
//       // expires: new Date(Date.now() + 10 * 1000)
//     },
//   })
// );
await db.sequelize.sync({ force: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      console.log(1, file);
      callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
      console.log(2, file);
      const tempName = Date.now() + "_" + file.originalname;
      //   imgs.push(tempName);
      callback(null, tempName);
    },
    //옵션
  }),
});

app.post("/test", async (req, res) => {
  const test = await db.Test.findOne({
    where: { id: 1 },
  });
  await test.update({ content: 5 });
  res.json({ ok: "ok" });
});
app.post("/upload", upload.array("icon"), (req, res) => {
  // console.log(req.files);
  //   console.log(req?.data.title);
  console.log(req.body);
  const fileurl = `/uploads/${req.files[0].filename}`;
  console.log(fileurl);
  res.json({ url: fileurl });
});
app.post("/getCookie", (req, res) => {
  console.log(req.body);
  res.cookie("why", "dsad");
  res.send({ 1: 1 });
});
app.listen(app.get("port"), () => {
  console.log("server open", app.get("port"));
});
