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
    res.json({ error: err.message });
  }
};
