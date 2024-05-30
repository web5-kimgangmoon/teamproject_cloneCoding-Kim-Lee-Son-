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
    await catrgory.update(reqbody);

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(419);
=======
>>>>>>> 180d9a7 (feedback and admin)
=======
    res.status(419);
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
