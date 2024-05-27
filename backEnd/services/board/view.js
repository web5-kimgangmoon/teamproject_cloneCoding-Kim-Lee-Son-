import {
  Channel,
  ChannelAdmin,
  Category,
  Board,
  BoardLike,
  BoardDislike,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;
    const nowuser = req.user;

    const reqcuery = req.query;
    // const nowpage = reqcuery.page;
    // const nowview = reqcuery.boardId;
    const nowpage = 1;
    const nowview = 1;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
    });
    const channemAdmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id },
    });

    const view = await Board.findOne({
      where: { id: nowview },
      include: [{ model: BoardLike }, { model: BoardDislike }],
    });

    await Board.update(
      { viewPoint: view.viewPoint + 1 },
      {
        where: { id: nowview },
      }
    );
    if (catename) {
      const category = await Category.findAll({
        where: { channelId: channel.id, engTitle: catename },
        include: [
          {
            model: Board,
            include: [{ model: BoardLike }, { model: BoardDislike }],
          },
        ],
        order: [[Board, "id", "DESC"]],
        offset: (nowpage - 1) * 30,
        limit: 30,
      });
      res.json({
        category: category,
        user: nowuser,
        channel: channel,
        channemAdmin: channemAdmin,
        view: view,
      });
    } else {
      const category = await Category.findAll({
        where: { channelId: channel.id },
        include: [
          {
            model: Board,
            include: [{ model: BoardLike }, { model: BoardDislike }],
          },
        ],
        order: [[Board, "id", "DESC"]],
        offset: (nowpage - 1) * 30, // 현재 페이지 받아와서 보내기
        limit: 30, // 페이지당 글 갯수
      });
      res.json({
        category: category,
        user: nowuser,
        channel: channel,
        channemAdmin: channemAdmin,
        view: view,
      });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
