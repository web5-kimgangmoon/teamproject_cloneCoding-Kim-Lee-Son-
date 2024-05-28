//채널을 누르면 맨앞에 오는 페이지임

import {
  Channel,
  ChannelAdmin,
  Category,
  Board,
  BoardLike,
  BoardDislike,
  sequelize,
  Comment,
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;
    const nowuser = req.user;
    const nowpage = req.query.page;
    // const nowpage = 1;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });
    // const channemAdmin = await ChannelAdmin.findAll({
    //   where: { channelId: channel.id },
    // });

    if (catename) {
      const category = await Category.findAll({
        where: { channelId: channel.id, engTitle: catename },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        include: [
          {
            model: Board,
            include: [
              { model: BoardLike, attributes: [] },
              { model: BoardDislike, attributes: [] },
              // { model: Comment, attributes: [] },
            ],
            order: [["id", "DESC"]],
            offset: (nowpage - 1) * 30,
            limit: 30,
            attributes: [
              "id",
              "viewPoint",
              "title",
              "contents",
              "createdAt",
              "updatedAt",
              [sequelize.fn("count", sequelize.col("BoardLikes.id")), "like"],
              [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "dislike"],
              // [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "commentcount"],
            ],
            group: ["id"],
          },
        ],
      });
      res.json({
        category: category,
        user: nowuser,
        channel: channel,
      });
    } else {
      const category = await Category.findAll({
        where: { channelId: channel.id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        include: [
          {
            model: Board,
            include: [
              { model: BoardLike, attributes: [] },
              { model: BoardDislike, attributes: [] },
              { model: Comment, attributes: [] },
            ],
            order: [["id", "DESC"]],
            offset: (nowpage - 1) * 30,
            limit: 30,
            attributes: [
              "id",
              "viewPoint",
              "title",
              "contents",
              "createdAt",
              "updatedAt",
              [sequelize.fn("count", sequelize.col("BoardLikes.id")), "like"],
              [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "dislike"],
              [sequelize.fn("count", sequelize.col("Comments.id")), "commentcount"],
            ],
            group: ["id"],
          },
        ],
      });
      res.json({
        category: category,
        user: nowuser,
        channel: channel,
      });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
