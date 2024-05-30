import { User, Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const nowuser = req.user;
    const channel = await Channel.findOne({
      where: { engTitle: reqbody.channel },
      attributes: ["engTitle"],
    });

    if (nowuser) {
      const userinfo = await User.findAll({
        where: { id: nowuser.id },
        attributes: ["email", "nick", "profilImg"],
      });
      res.json({ result: "ok", userinfo: userinfo, channel: channel });
    } else {
      throw new Error("not login");
    }
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
