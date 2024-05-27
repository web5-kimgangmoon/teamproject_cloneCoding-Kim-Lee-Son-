import { Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const channel = await Channel.findOne({
      where: { engTitle: req.body.channel },
      attributes: ["engTitle"],
    });

    await res.cookie("user", "", {
      maxAge: 0,
      signed: true,
    });
    await res.json({ result: "ok", channel: channel });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
