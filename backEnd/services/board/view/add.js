<<<<<<< HEAD
import { Comment, Board } from "../../../models/index.js";

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

export default async (req, res) => {
  try {
    const nowuser = req.user;

    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqquery = req.query;
    // const boardid = reqquery.boardId;
    // const commentid = reqquery.commentId;
    const boardid = 1;
    const commentid = 1;

    //댓글과 답글관련 코드
    if (commentid) {
      await Comment.create({
        ...req.body,
        userId: nowuser.id,
        boardId: boardid,
        recommentId: commentid,
      });
    } else {
      await Comment.create({ ...req.body, userId: nowuser.id, boardId: boardid });
    }
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
>>>>>>> 4090055 (feat:board complete)
    res.json({ error: err.message });
  }
};
