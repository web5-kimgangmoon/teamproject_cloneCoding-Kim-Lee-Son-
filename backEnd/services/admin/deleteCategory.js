import { Channel, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;

    const nowchannel = await Channel.findOne({
      where: { engTitle: chname },
    });

    const catrgory = await Category.findOne({
      where: { channelId: nowchannel.id, engTitle: catename },
    });

    await catrgory.destroy();

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
