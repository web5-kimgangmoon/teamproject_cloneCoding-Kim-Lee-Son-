<<<<<<< HEAD
import { Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqbody = req.body;
    let chname = reqbody.channel;

    if (!chname) {
      chname = "main";
    }
    const channel = await Channel.findOne({
      where: { engTitle: chname },
      attributes: ["engTitle"],
    });

    req.session.destroy();
    await res.cookie("user-session", "", {
      maxAge: 0,
      signed: true,
    });
    await res.json({ result: "ok", channel: channel });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else {
      res.status(419);
    }
=======
export default async (req, res) => {
  try {
    await res.cookie("user", "", {
      maxAge: 0,
      signed: true,
    });
    await res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
>>>>>>> 8895f13 (feat:userAll)
    res.json({ error: err.message });
  }
};
