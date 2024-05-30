import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from "cors";
import crypto from "crypto";
import path from "path";

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
app.use(cookieParser("test"));
app.use("/imgs", express.static("/Users/lee/Desktop/kga/teamproject_cloneCoding/backEnd/uploads"));

app.use(router);
const force = true;

try {
  const testha = crypto.createHash("sha256").update("1q2w3e4r").digest("hex");
  await sequelize.sync({ force });
  if (force) {
    const user = await User.create({
      strid: "qwer",
      email: "qwera",
      pw: testha,
      nick: "asdf",
      profilImg: "zxv",
    });
    const usertwo = await User.create({
      strid: "qwerasd",
      email: "qwerasd",
      pw: testha,
      nick: "asdfzxc",
      profilImg: "zxvcv",
    });
    const channel = await Channel.create({
      title: "메인페이지",
      engTitle: "main",
      writePlaceholder: "qwer",
      commentPlaceholder: "zxcv",
      description: "설명칸",
      iconPath: "mnbv",
      imgPath: "poiiu",
    });
    let cate = await Category.create({
      name: "일반",
      engTitle: "normal",
      // channelId: "1",
    });
    let board = await Board.create({
      title: "공지",
      contents: "공지",
      notice: true,
      superNotice: "1",
      // userId: "1",
      // categoryId: "1",
    });
    await cate.addBoard(board);
    await user.addBoard(board);
    await channel.addBoard(board);

    board = await Board.create({
      title: "제목",
      contents: "내용",
      notice: false,
      superNotice: "0",
      // userId: "1",
      // categoryId: "1",
    });
    await channel.addCategory(cate);
    await cate.addBoard(board);
    await user.addBoard(board);
    await channel.addBoard(board);

    let comment = await Comment.create({
      contents: "124124",
      // boardId: "1",
      // userId: "1",
    });
    user.addComment(comment);
    board.addComment(comment);
    const suad = await ChannelAdmin.create({
      superAdmin: "1",
      // userId: "1",
      // channelId: "1",
    });
    user.addChannelAdmin(suad);
    channel.addChannelAdmin(suad);
    const ad = await ChannelAdmin.create({
      superAdmin: "0",
      // userId: "2",
      // channelId: "1",
    });
    usertwo.addChannelAdmin(ad);
    channel.addChannelAdmin(ad);
    const dislike = await BoardDislike.create({
      dislike: "1",
      // userId: "1",
      // boardId: "1",
    });
    user.addBoardDislike(dislike);
    board.addBoardDislike(dislike);
    const disliketwo = await BoardDislike.create({
      dislike: "1",
      // userId: "1",
      // boardId: "1",
    });
    usertwo.addBoardDislike(disliketwo);
    board.addBoardDislike(disliketwo);
    const like = await BoardLike.create({
      like: "1",
      // userId: "1",
      // boardId: "1",
    });
    // const liketwo = await BoardLike.create({
    //   like: "1",
    //   // userId: "1",
    //   // boardId: "1",
    // });
    user.addBoardLike(like);
    board.addBoardLike(like);
    // usertwo.addBoardLike(liketwo);
    // board.addBoardLike(liketwo);
    let ccomment = await Comment.create({
      contents: "124124",
      // recommentId: "1",
      // boardId: "1",
      // userId: "1",
    });
    let recomment = await Comment.create({
      contents: "124124",
    });
    user.addComment(ccomment);
    board.addComment(ccomment);
    comment.addChildren(ccomment);

    user.addComment(recomment);
    board.addComment(recomment);
    ccomment.addChildren(recomment);

    cate = await Category.create({
      name: "테스트",
      engTitle: "test",
      // channelId: "1",
    });
    await channel.addCategory(cate);

    // await User.destroy({
    //   where: { id: "1" },
    // });
  }
} catch (error) {
  console.error(error);
}

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
