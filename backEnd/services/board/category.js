import { Channel, Category } from "../../models/index.js";

export default async (req, res) => {
  const reqbody = req.body;
  let chname = reqbody.channel;

  if (!chname) {
    chname = "main";
  }

  const channel = await Channel.findOne({
    where: { engTitle: chname },
    attributes: ["id"],
  });

  const category = await Category.findAll({
    where: { channelId: channel.id },
    attributes: ["engTitle", "name"],
  });

  res.json({ category: category });
  try {
  } catch (err) {
    console.error(err);
    res.status(419);
    res.json({ error: err.message });
  }
};
