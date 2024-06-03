import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;

    const reqcuery = req.query;
    const nowview = reqcuery.boardId;
    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    // 수정자 확인 코드
    const board = await Board.findOne({
      where: { id: nowview, userId: nowuser.id },
      include: {
        model: Category,
      },
    });
    const channeladmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id, userId: nowuser.id },
    });
    if (!board || !channeladmin) {
      throw new Error("not match user");
    }
    //

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });
    await board.update({
      ...reqbody,
      categoryId: category.id,
    });

    if (board.superNotice) {
      board.update({ notice: ture });
    }

    res.json({ result: "ok" });
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
