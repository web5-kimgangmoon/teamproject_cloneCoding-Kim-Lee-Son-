<<<<<<< HEAD
<<<<<<< HEAD
import { Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
<<<<<<< HEAD
<<<<<<< HEAD
    if (!nowuser) {
      throw new Error("not logged in");
    }
=======
>>>>>>> ec829b9 (임시)
=======
    if (!nowuser) {
      throw new Error("not logged in");
    }
>>>>>>> fe1a391 (status)
    const reqbody = req.body;
    let chname = reqbody.channel;

    if (!chname) {
      chname = "main";
    }
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
import { Channel } from "../../models/index.js";

>>>>>>> 4090055 (feat:board complete)
export default async (req, res) => {
  try {
=======
>>>>>>> ec829b9 (임시)
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
>>>>>>> 8895f13 (feat:userAll)
=======
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
