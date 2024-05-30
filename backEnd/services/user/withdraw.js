import { User, Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const nowuser = req.user;

    const channel = await Channel.findOne({
      where: { engTitle: reqbody.channel },
      attributes: ["engTitle"],
    });

    await User.destroy({ where: { id: nowuser.id } });
    // await res.cookie("user", "", {
    //   maxAge: 0,
    //   signed: true,
    // });
    req.session.destroy();
    await res.cookie("user-session", "", {
      maxAge: 0,
      signed: true,
    });

    res.json({ result: "ok", channel: channel });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
};
