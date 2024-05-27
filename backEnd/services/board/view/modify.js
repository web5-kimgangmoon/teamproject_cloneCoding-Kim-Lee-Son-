import { Comment } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqquery = req.query;
    const commentid = reqquery.commentId;

    const comment = await Comment.findOne({
      where: { id: commentid, userId: nowuser.id },
      include: {
        model: Category,
      },
    });
    if (!comment) {
      throw new Error("not match user");
    }
    res.json({ result: "ok" });

    await Comment.update({ ...req.body });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
