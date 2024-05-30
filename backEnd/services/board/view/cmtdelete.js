import { Comment, ChannelAdmin, Channel } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
<<<<<<< HEAD
<<<<<<< HEAD
    const reqbody = req.body;
    const chname = reqbody.channel;
=======
    const chname = req.body.channel;
>>>>>>> 4090055 (feat:board complete)
=======
    const reqbody = req.body;
    const chname = reqbody.channel;
>>>>>>> ec829b9 (임시)

    const reqquery = req.query;
    const commentid = reqquery.commentId;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
    });

    const comment = await Comment.findOne({
      where: { id: commentid, userId: nowuser.id },
<<<<<<< HEAD
<<<<<<< HEAD
    });
    const channeladmin = await ChannelAdmin.findOne({
=======
      include: {
        model: Category,
      },
    });
    const channeladmin = await ChannelAdmin.findAll({
>>>>>>> 4090055 (feat:board complete)
=======
    });
    const channeladmin = await ChannelAdmin.findOne({
>>>>>>> 180d9a7 (feedback and admin)
      where: { channelId: channel.id, userId: nowuser.id },
    });
    if (!comment || !channeladmin) {
      throw new Error("not match user");
    }

    await Comment.destroy({
      where: { id: commentid },
    });
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
    } else {
      res.status(419);
    }
=======
>>>>>>> 4090055 (feat:board complete)
    res.json({ error: err.message });
  }
};
