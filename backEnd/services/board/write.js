import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (!req.user) {
      throw new Error("not logged in");
    }
    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });

    await Board.create({ ...reqbody, categoryId: category.id, userId: req.user.id });

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
