<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Comment, Board } from "../../../models/index.js";
=======
import { Comment, Board, Channel } from "../../../models/index.js";
>>>>>>> ec829b9 (임시)

export default async (req, res) => {
  try {
    // 로그인 확인
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    //빈값 들어오면 실행 안되게
    const reqbody = req.body;
    if (reqbody.contents == "") {
      throw new Error("not empty contents");
    }

    const reqquery = req.query;
    let boardid = reqquery.boardId;
    let commentid = reqquery.commentId;

    if (!boardid) {
      throw new Error("not find board");
    }

    const nowboard = await Board.findOne({
      where: { id: boardid },
    });
    if (!nowboard) {
      throw new Error("not find board");
    }

    console.log(boardid, commentid);

    let nowcomment;
    if (!commentid) {
    } else {
      nowcomment = await Comment.findOne({
        where: { id: commentid },
      });
    }
    console.log(nowboard);

    const comment = await Comment.create(reqbody);
    await nowuser.addComment(comment);
    await nowboard.addComment(comment);
    if (nowcomment) {
      nowcomment.addChildren(comment);
    }

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not empty contents") {
      res.status(400);
    } else if (err.message == "not find board") {
      res.status(405);
    } else {
      res.status(419);
    }
=======
import { Comment } from "../../../models/index.js";
=======
import { Comment, Board } from "../../../models/index.js";
>>>>>>> 180d9a7 (feedback and admin)
=======
import { Comment, Board } from "../../../models/index.js";
>>>>>>> fe1a391 (status)

export default async (req, res) => {
  try {
    // 로그인 확인
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    //빈값 들어오면 실행 안되게
    const reqbody = req.body;
    if (reqbody.contents == "") {
      throw new Error("not empty contents");
    }

    const reqquery = req.query;
    let boardid = reqquery.boardId;
    let commentid = reqquery.commentId;

    if (!boardid) {
      throw new Error("not find board");
    }

    const nowboard = await Board.findOne({
      where: { id: boardid },
    });
    if (!nowboard) {
      throw new Error("not find board");
    }

    console.log(boardid, commentid);

    let nowcomment;
    if (!commentid) {
    } else {
      nowcomment = await Comment.findOne({
        where: { id: commentid },
      });
    }
    console.log(nowboard);

    const comment = await Comment.create(reqbody);
    await nowuser.addComment(comment);
    await nowboard.addComment(comment);
    if (nowcomment) {
      nowcomment.addChildren(comment);
    }

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
>>>>>>> 4090055 (feat:board complete)
=======
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not empty contents") {
      res.status(400);
    } else if (err.message == "not find board") {
      res.status(405);
    } else {
      res.status(419);
    }
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
