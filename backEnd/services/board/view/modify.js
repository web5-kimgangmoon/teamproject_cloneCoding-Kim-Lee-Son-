import { Comment } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
<<<<<<< HEAD
    const reqbody = req.body;
=======
>>>>>>> 4090055 (feat:board complete)
    const reqquery = req.query;
    const commentid = reqquery.commentId;

    const comment = await Comment.findOne({
      where: { id: commentid, userId: nowuser.id },
<<<<<<< HEAD
=======
      include: {
        model: Category,
      },
>>>>>>> 4090055 (feat:board complete)
    });
    if (!comment) {
      throw new Error("not match user");
    }
<<<<<<< HEAD
    await Comment.update(reqbody);

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
    } else {
      res.status(419);
    }
=======
    res.json({ result: "ok" });

    await Comment.update({ ...req.body });
  } catch (err) {
    console.error(err);
>>>>>>> 4090055 (feat:board complete)
    res.json({ error: err.message });
  }
};
