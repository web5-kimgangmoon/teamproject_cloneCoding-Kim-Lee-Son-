import { Channel, ChannelAdmin, Board, Category, User } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    const reqbody = req.body;
    let chname = reqbody.channel;
    const catename = reqbody.category;

    if (!chname) {
      chname = "main";
    }
    const reqcuery = req.query;
    const nowview = reqcuery.boardId;
    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [
        {
          model: ChannelAdmin,
          attributes: ["superAdmin"],
          include: [{ model: User, attributes: ["nick"] }],
        },
      ],
      attributes: ["writePlaceholder", "title", "iconPath", "engTitle", "description", "id"],
    });

    const board = await Board.findOne({
      where: { id: nowview, userId: nowuser.id },
      include: {
        model: Category,
        attributes: ["name", "engTitle"],
      },
      attributes: ["title", "contents"],
    });
    const channeladmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id, userId: nowuser.id },
    });
    if (!board || !channeladmin) {
      throw new Error("not match user");
    }

    res.json({
      // user: nowuser,
      channel: channel,
      // channemAdmin: channemAdmin,
      board: board,
    });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
    } else {
      res.status(419);
    }
    res.json({ err: err.message });
  }
};
