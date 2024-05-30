import { Comment, ChannelAdmin, Channel } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqbody = req.body;
    const chname = reqbody.channel;

    const reqquery = req.query;
    const commentid = reqquery.commentId;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
    });

    const comment = await Comment.findOne({
      where: { id: commentid, userId: nowuser.id },
    });
    const channeladmin = await ChannelAdmin.findOne({
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
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
    } else {
      res.status(419);
    }
    res.json({ error: err.message });
  }
};
