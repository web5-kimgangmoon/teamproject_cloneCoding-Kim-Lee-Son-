import { Channel, ChannelAdmin } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    const reqbody = req.body;
    const chname = reqbody.channel;

    const nowchannel = await Channel.findOne({
      attributes: ["id"],
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin, where: { userId: nowuser.id } }],
    });

    console.log(nowuser);

    if (!nowchannel) {
      throw new Error("not admin");
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  } finally {
    next();
  }
};
