import { User } from "../../models/index.js";
import crypto from "crypto";

export default async (req, res) => {
  try {
    // if (req.body.pw != req.body["pw-check"]) {
    //   throw new Error("not match password");
    // }
    const pwhash = crypto.createHash("sha256").update(req.body.pw).digest("hex");
    const randomNum = Math.random().toString().split(".")[1];
    req.body.pw = pwhash;
    if (await User.findOne({ where: { strid: req.body.strid } })) {
      throw new Error(" duplication strid");
    } else if (await User.findOne({ where: { nick: req.body.nick } })) {
      throw new Error("duplication nick");
    } else if (await User.findOne({ where: { email: req.body.email } })) {
      throw new Error("duplication email");
    }
    await User.create({ ...req.body, profilImg: randomNum });
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    // if (err.message == "not match password") {
    // res.status(400);
    // } else {
    //   res.status(409);
    // }
    res.json({ error: err.message });
  }
};
