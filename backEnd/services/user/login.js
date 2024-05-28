<<<<<<< HEAD
<<<<<<< HEAD
import { User, Channel } from "../../models/index.js";
import crypto from "crypto";

export default [
  async (req, res) => {
    try {
      const reqbody = req.body;
      const channelname = reqbody.channel;

      const channel = await Channel.findOne({
        where: { engTitle: channelname },
      });

      const pwhash = crypto.createHash("sha256").update(reqbody.pw).digest("hex");

      const user = await User.findOne({
        where: { strid: reqbody.strid },
      });

      if (!user) {
        throw new Error("not found user");
      } else if (user.pw == pwhash) {
        // res.cookie("user", user.id, {
        //   maxAge: 60 * 60 * 1000,
        //   signed: true,
        // });
        req.session.user = user.id;

        res.json({ result: "ok", channel: channel });
      } else {
        throw new Error("not found user");
      }
    } catch (err) {
      console.error(err);
      if (err.message == "not found user") {
        res.status(405);
      } else {
        res.status(419);
      }
      res.json({ error: err.message });
    }
  },
];
=======
import { User } from "../../models/index.js";
=======
import { User, Channel } from "../../models/index.js";
>>>>>>> 4090055 (feat:board complete)
import crypto from "crypto";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const channelname = reqbody.channel;

    const channel = await Channel.findOne({
      where: { engTitle: channelname },
    });

    const pwhash = crypto.createHash("sha256").update(req.body.pw).digest("hex");

    const user = await User.findOne({
      where: { strid: reqbody.strid },
    });
    // const pruser = crypto.createHash("sha256").update(user.id).digest("hex");

    if (!user) {
      throw new Error("not found user");
    } else if (user.pw == pwhash) {
      res.cookie("user", user.id, {
        maxAge: 60 * 60 * 1000,
        signed: true,
      });
      res.json({ result: "ok", channel: channel });
    } else {
      throw new Error("not found user qw");
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
>>>>>>> 8895f13 (feat:userAll)
