import { User, Channel, ChannelAdmin } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    const reqbody = req.body;
    const chname = reqbody.channel;
    const targetuser = reqbody.nick;

    const user = await User.findOne({
      where: { nick: targetuser },
    });

    const nowchannel = await Channel.findOne({
      where: { engTitle: chname },
    });
    const superadmin = await ChannelAdmin.findOne({
      where: { channelId: nowchannel.id, userId: nowuser.id },
    });
    if (!superadmin.superAdmin) {
      throw new Error("not super admin");
    }

    await user.destroy();

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
