import { Channel, ChannelAdmin } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    const channel = await Channel.create(req.body);
    const channeladmin = await ChannelAdmin.create({ superAdmin: 1 });
    await nowuser.addChannelAdmin(channeladmin);
    await channel.addChannelAdmin(channeladmin);

    res.json({ result: "ok", nowchannel: channel.id });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else {
      res.status(419);
    }
    res.json({ error: err.message });
  }
};
