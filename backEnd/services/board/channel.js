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
    let chname = reqbody.channel;
    let catename = reqbody.category;
    const nowuser = req.user;
    let nowpage = req.query.page;

    if (!nowpage) {
      nowpage = 1;
    }

    if (!chname) {
      chname = "main";
    }

    let channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });
    if (!channel) {
      channel = await Channel.findOne({
        where: { engTitle: "main" },
        include: [{ model: ChannelAdmin }],
      });
    }

    let listcheck = false;
    let category = await Category.findAll({
      where: { channelId: channel.id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    if (catename) {
      category = await Category.findAll({
        where: { channelId: channel.id, engTitle: catename },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      listcheck = true;
    }
    if (!category) {
      category = await Category.findAll({
        where: { channelId: channel.id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      listcheck = false;
    }

    let boardlist = await Board.findAll({
      where: { channelId: channel.id },
      include: [
        { model: BoardLike, attributes: [] },
        // { model: BoardDislike, attributes: [] },
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
        [sequelize.fn("count", sequelize.col("boardLikes.id")), "like"],
        // [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "dislike"],
        // [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "commentcount"],
      ],
      group: ["id"],
    });
    if (listcheck) {
      boardlist = await Board.findAll({
        where: { channelId: channel.id, categoryId: category.id },
        include: [
          // { model: BoardLike },
          // { model: BoardDislike, attributes: [] },
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
          // [sequelize.fn("count", sequelize.col("boardLikes.id")), "like"],
          // [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "dislike"],
          // [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "commentcount"],
        ],
        group: ["id"],
      });
    }
    res.json({
      category: category,
      user: nowuser,
      channel: channel,
      boardlist: boardlist,
    });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
