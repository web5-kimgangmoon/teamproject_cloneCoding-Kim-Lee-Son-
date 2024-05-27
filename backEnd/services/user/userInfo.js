<<<<<<< HEAD
<<<<<<< HEAD
import { User, Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const nowuser = req.user;
    console.log(nowuser);
    let chname = reqbody.channel;
    if (!chname) {
      chname = "main";
    }
    let channel = await Channel.findOne({
      where: { engTitle: chname },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    if (!channel) {
      channel = await Channel.findOne({
        where: { engTitle: "main" },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
    }

    if (nowuser) {
      const userinfo = await User.findAll({
        where: { id: nowuser.id },
        attributes: ["email", "nick", "profilImg"],
      });
      res.json({ result: "ok", userinfo: userinfo, channel: channel });
    } else {
      throw new Error("not logged in");
    }
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else {
      res.status(419);
    }
=======
import { User } from "../../models/index.js";
=======
import { User, Channel } from "../../models/index.js";
>>>>>>> 4090055 (feat:board complete)

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
>>>>>>> 8895f13 (feat:userAll)
    res.json({ error: err.message });
  }
};
