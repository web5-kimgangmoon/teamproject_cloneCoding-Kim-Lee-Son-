import { Channel, ChannelAdmin, Board, Category } from "../../models/index.js";

export default async (req, res) => {
  const reqbody = req.body;
  const chname = reqbody.channel;
  const catename = reqbody.category;
  const nowuser = req.user;

  const reqcuery = req.query;
  // const nowview = reqcuery.boardId;
  const nowview = 1;
  const channel = await Channel.findOne({
    where: { engTitle: chname },
    include: [{ model: ChannelAdmin }],
  });

  const board = await Board.findOne({
    where: { id: nowview, userId: nowuser.id },
    include: {
      model: Category,
    },
  });
  const channeladmin = await ChannelAdmin.findAll({
    where: { channelId: channel.id, userId: nowuser.id },
  });
  if (!view || !channeladmin) {
    throw new Error("not match user");
  }

  res.json({
    // user: nowuser,
    channel: channel,
    // channemAdmin: channemAdmin,
    board: board,
  });
  try {
  } catch (err) {
    console.error(err);
    res.json({ err: err.message });
  }
};
