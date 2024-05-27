//채널을 누르면 맨앞에 오는 페이지임

import {
  Channel,
  ChannelAdmin,
  Category,
  Board,
  BoardLike,
  BoardDislike,
<<<<<<< HEAD
  sequelize,
  Sequelize,
  Comment,
  User,
=======
>>>>>>> 27a56be (feat : channelmain)
} from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
<<<<<<< HEAD
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
    let nowuserinfo;
    if (nowuser) {
      nowuserinfo = await User.findOne({
        where: { id: nowuser.id },
        attributes: ["nick"],
      });
    }

    let channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [
        {
          model: ChannelAdmin,
          attributes: ["superAdmin"],
          include: [{ model: User, attributes: ["nick"] }],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    if (!channel) {
      channel = await Channel.findOne({
        where: { engTitle: "main" },
        include: [
          {
            model: ChannelAdmin,
            attributes: ["superAdmin"],
            include: [{ model: User, attributes: ["nick"] }],
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
    }

    let catecheck = false;
    let category = await Category.findAll({
      where: { channelId: channel.id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "channelId"],
      },
    });
    if (catename) {
      category = await Category.findOne({
        where: { channelId: channel.id, engTitle: catename },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt", "channelId"],
        },
      });
      catecheck = true;
    }
    if (!category) {
      category = await Category.findAll({
        where: { channelId: channel.id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt", "channelId"],
        },
      });
      catecheck = false;
    }

    const boardcount = await Board.findAll({
      where: { channelId: channel.id },
      include: [{ model: Category, attributes: ["name", "engTitle"] }],
      attributes: [
        "category_id",
        [sequelize.fn("count", Sequelize.col("category_id")), "catecount"],
      ],
      group: ["category_id"],
    });

    let boardlist = await Board.findAll({
      where: { channelId: channel.id },
      include: [{ model: User, attributes: ["nick"] }],
      attributes: {
        include: [
          [
            Sequelize.literal(`(
            SELECT COUNT(*)
            FROM board_like AS board_like
            WHERE
            board_like.board_id = Board.id
          )`),
            "likeCount",
          ],
          [
            Sequelize.literal(`(
            SELECT COUNT(*)
            FROM board_dislike AS board_dislike
            WHERE
            board_dislike.board_id = Board.id
          )`),
            "dislikeCount",
          ],
          [
            Sequelize.literal(`(
            SELECT COUNT(*)
            FROM comment AS comment
            WHERE
            comment.board_id = Board.id
          )`),
            "commentCount",
          ],
        ],
      },
      order: [["id", "DESC"]],
      offset: (nowpage - 1) * 30,
      limit: 30,
    });

    if (catecheck) {
      boardlist = await Board.findAll({
        where: { channelId: channel.id, categoryId: category.id },
        include: [{ model: User, attributes: ["nick"] }],
        attributes: {
          include: [
            [
              Sequelize.literal(`(
              SELECT COUNT(*)
              FROM board_like AS board_like
              WHERE
              board_like.board_id = Board.id
            )`),
              "likeCount",
            ],
            [
              Sequelize.literal(`(
              SELECT COUNT(*)
              FROM board_dislike AS board_dislike
              WHERE
              board_dislike.board_id = Board.id
            )`),
              "dislikeCount",
            ],
            [
              Sequelize.literal(`(
              SELECT COUNT(*)
              FROM comment AS comment
              WHERE
              comment.board_id = Board.id
            )`),
              "commentCount",
            ],
          ],
        },
        order: [["id", "DESC"]],
        offset: (nowpage - 1) * 30,
        limit: 30,
      });
    }
    res.json({
      category: [category],
      user: nowuserinfo,
      channel: channel,
      boardlist: boardlist,
      boardcount: boardcount,
    });
  } catch (err) {
    console.error(err);
    res.status(419);
=======
    const chname = reqbody.channel;
    const catename = reqbody.category;
    const nowuser = req.user;
    const nowpage = req.query.page;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
    });
    const channemAdmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id },
    });

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
      res.json({ category: category, user: nowuser, channel: channel, channemAdmin: channemAdmin });
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
      res.json({ category: category, user: nowuser, channel: channel, channemAdmin: channemAdmin });
    }
  } catch (err) {
    console.error(err);
>>>>>>> 27a56be (feat : channelmain)
    res.json({ error: err.message });
  }
};
