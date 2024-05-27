import { User, Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const channel = await Channel.findOne({
      where: { engTitle: req.body.channel },
      attributes: ["engTitle"],
    });

    await User.destroy({ where: { id: req.user } });
    await res.cookie("user", "", {
      maxAge: 0,
      signed: true,
    });
    res.json({ result: "ok", channel: channel });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
};
