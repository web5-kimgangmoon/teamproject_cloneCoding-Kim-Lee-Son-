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

    const admin = await ChannelAdmin.create({ superAdmin: false });
    await user.addChannelAdmin(admin);
    await nowchannel.addChannelAdmin(admin);

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
    if (err.message == "not super admin") {
      res.status(403);
    } else {
      res.status(419);
    }
=======
>>>>>>> 180d9a7 (feedback and admin)
    res.json({ error: err.message });
  }
};
