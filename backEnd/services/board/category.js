import { Channel, Category } from "../../models/index.js";

export default async (req, res) => {
<<<<<<< HEAD
  try {
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
  } catch (err) {
    console.error(err);
    res.status(419);
=======
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
<<<<<<< HEAD
>>>>>>> 27a56be (feat : channelmain)
=======
    res.status(419);
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
