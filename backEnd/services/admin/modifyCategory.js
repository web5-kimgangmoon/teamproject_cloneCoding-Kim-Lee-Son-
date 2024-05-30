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
    res.status(419);
    res.json({ error: err.message });
  }
};
