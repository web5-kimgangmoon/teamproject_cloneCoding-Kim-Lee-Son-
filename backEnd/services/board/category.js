import { Channel, Category } from "../../models/index.js";

export default async (req, res) => {
  const reqbody = req.body;
  const chname = reqbody.channel;

  const channel = await Channel.findOne({
    where: { engTitle: chname },
  });

  const category = await Category.findAll({
    where: { channelId: channel.id },
  });

  res.json({ category: category });
  try {
  } catch (err) {
    console.error(err);
    res.status(419);
    res.json({ error: err.message });
  }
};
