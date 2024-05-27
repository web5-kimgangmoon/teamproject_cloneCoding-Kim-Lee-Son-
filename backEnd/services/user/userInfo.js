import { User, Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const channel = await Channel.findOne({
      where: { engTitle: req.body.channel },
      attributes: ["engTitle"],
    });

    if (req.user) {
      const userinfo = await User.findAll({
        where: { id: req.user },
        attributes: ["email", "nick", "profilImg"],
      });
      res.json({ result: "ok", userinfo: userinfo, channel: channel });
    } else {
      throw new Error("not login");
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
