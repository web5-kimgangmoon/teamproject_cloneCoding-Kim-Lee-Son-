import { Comment, Board, Channel } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    const reqbody = req.body;

    const reqquery = req.query;
    const boardid = reqquery.boardId;
    const commentid = reqquery.commentId;

    const nowboard = await Board.findOne({
      where: { id: boardid },
    });
    const nowcomment = await Comment.findOne({
      where: { id: commentid },
    });

    //댓글과 답글관련 코드

    const comment = await Comment.create(reqbody);
    nowuser.addComment(comment);
    nowboard.addComment(comment);
    if (nowcomment) {
      nowcomment.addChildren(comment);
    }

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
