import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";
import crypto from "crypto";

import router from "./controllers/index.js";
import {
  sequelize,
  User,
  Channel,
  Category,
  Board,
  Comment,
  ChannelAdmin,
  BoardDislike,
  BoardLike,
} from "./models/index.js";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors({ origin: [/localhost\:?\d*/, /127.0.0.1\:?\d*/], credentials: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || "test"));

app.use(router);
const force = true;

try {
  const testha = crypto.createHash("sha256").update("1q2w3e4r").digest("hex");
  await sequelize.sync({ force });
  if (force) {
    await User.create({
      strid: "qwer",
      email: "qwera",
      pw: testha,
      nick: "asdf",
      profilImg: "zxv",
    });
    await Channel.create({
      title: "가나다",
      engTitle: "asd",
      writePlaceholder: "qwer",
      commentPlaceholder: "zxcv",
      description: "설명칸",
      iconPath: "mnbv",
      imgPath: "poiiu",
    });
    await Category.create({
      name: "일반",
      engTitle: "normal",
      channelId: "1",
    });
    await Board.create({
      title: "제목",
      contents: "내용",
      notice: false,
      superNotice: "0",
      userId: "1",
      categoryId: "1",
    });
    await Board.create({
      title: "공지",
      contents: "공지",
      notice: false,
      superNotice: "1",
      userId: "1",
      categoryId: "1",
    });
    await Comment.create({
      contents: "124124",
      boardId: "1",
      userId: "1",
    });
    await ChannelAdmin.create({
      superAdmin: "1",
      userId: "1",
      channelId: "1",
    });
    await BoardDislike.create({
      userId: "1",
      boardId: "1",
      dislike: "1",
    });
    await BoardLike.create({
      userId: "1",
      boardId: "1",
      like: "1",
    });
    await Comment.create({
      recommentId: "2",
      contents: "124124",
      boardId: "1",
      userId: "1",
    });
  }
} catch (error) {
  console.error(error);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
