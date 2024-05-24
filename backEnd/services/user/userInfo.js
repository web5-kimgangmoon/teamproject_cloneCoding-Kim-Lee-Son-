import { User } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.user) {
      const userinfo = await User.findAll({
        where: { id: req.user },
        attributes: ["email", "nick", "profilImg"],
      });
      res.json({ result: "ok", userinfo: userinfo });
    } else {
      throw new Error("not login");
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
