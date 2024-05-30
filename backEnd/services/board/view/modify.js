import { Comment } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqbody = req.body;
    const reqquery = req.query;
    const commentid = reqquery.commentId;

    const comment = await Comment.findOne({
      where: { id: commentid, userId: nowuser.id },
    });
    if (!comment) {
      throw new Error("not match user");
    }
    await Comment.update(reqbody);

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
