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
    res.json({ error: err.message });
  }
};
