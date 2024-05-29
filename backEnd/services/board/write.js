import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    console.log(reqbody);
    if (reqbody.contents == "") {
      console.log("이건 빈값이야");
    }
    if (!req.user) {
      throw new Error("not logged in");
    }

    const chname = reqbody.channel;
    const catename = reqbody.category;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });

    const board = await Board.create(reqbody);
    category.addBoard(board);
    req.user.addBoard(board);

    res.json({ result: "ok", nowboard: board.id });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
