<<<<<<< HEAD
import { User, Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
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
    if (err.message == "not logged in") {
      res.status(401);
    } else {
      res.status(419);
    }
=======
import { User } from "../../models/index.js";

export default async (req, res) => {
  try {
    await User.destroy({ where: { id: req.user } });
    await res.cookie("user", "", {
      maxAge: 0,
      signed: true,
    });
    res.json({ result: "ok" });
  } catch (err) {
    console.log(err);
>>>>>>> 8895f13 (feat:userAll)
    res.json({ error: err.message });
  }
};
