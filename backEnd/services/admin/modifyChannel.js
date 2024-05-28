import { Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const chname = reqbody.channel;

    const nowchannel = await Channel.findOne({
      where: { engTitle: chname },
    });

    await nowchannel.update(reqbody);

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
    res.status(419);
=======
>>>>>>> 180d9a7 (feedback and admin)
    res.json({ error: err.message });
  }
};
