import { Channel, ChannelAdmin } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    const reqbody = req.body;
    const chname = reqbody.channel;

    const nowchannel = await Channel.findOne({
      where: { engTitle: chname },
    });

    const superadmin = await ChannelAdmin.findOne({
      where: { channelId: nowchannel.id, userId: nowuser.id },
    });

    if (!superadmin.superAdmin) {
      throw new Error("not super admin");
    }

    await nowchannel.destroy();
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not super admin") {
      res.status(403);
    } else {
      res.status(419);
    }
    res.json({ error: err.message });
  }
};
