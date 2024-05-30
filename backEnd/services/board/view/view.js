import {
  Channel,
  ChannelAdmin,
  Category,
  Board,
  BoardLike,
  BoardDislike,
  Comment,
  sequelize,
  Sequelize,
  User,
} from "../../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    let chname = reqbody.channel;
    let catename = reqbody.category;
    const nowuser = req.user;

    const reqcuery = req.query;
    let nowpage = reqcuery.page;
    const nowview = reqcuery.boardId;
    let commentpage = reqcuery.commentpage;

    if (!nowpage) {
      nowpage = 1;
    }
    if (!chname) {
      chname = "main";
    }
    if (!commentpage) {
      commentpage = 1;
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

    const view = await Board.findOne({
      where: { id: nowview },
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
      include: [
        {
          model: Comment,
          order: [["id", "DESC"]],
          offset: (commentpage - 1) * 50,
          limit: 50,
          // include: [
          //   {
          //     model: Comment,
          //     as: "children",
          //     include: [
          //       {
          //         model: Comment,
          //         as: "children",
          //       },
          //     ],
          //   },
          // ],
        },
        {
          model: Category,
        },
        { model: User },
      ],
    });

    // const commentcnt = await Comment.findAll({
    //   where: { boardId: nowview },
    //   attributes: [[sequelize.fn("count", "boardId"), "cnt"]],
    //   group: ["board_id"],
    // });
    // const likecnt = await BoardLike.findAll({
    //   where: { boardId: nowview },
    //   attributes: [[sequelize.fn("count", "boardId"), "cnt"]],
    //   group: ["board_id"],
    // });
    // const dislikecnt = await BoardDislike.findAll({
    //   where: { boardId: nowview },
    //   attributes: [[sequelize.fn("count", "boardId"), "cnt"]],
    //   group: ["board_id"],
    // });

    await Board.update(
      { viewPoint: view.viewPoint + 1 },
      {
        where: { id: nowview },
      }
    );

    let catecheck = false;
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
      catecheck = true;
    }
    if (!category) {
      category = await Category.findAll({
        where: { channelId: channel.id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      catecheck = false;
    }

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

    // if (catecheck) {
    //   boardlist = await Board.findAll({
    //     where: { channelId: channel.id, categoryId: category.id },
    //     include: [{ model: User, attributes: ["nick"] }],
    //     attributes: {
    //       include: [
    //         [
    //           Sequelize.literal(`(
    //           SELECT COUNT(*)
    //           FROM board_like AS board_like
    //           WHERE
    //           board_like.board_id = Board.id
    //         )`),
    //           "likeCount",
    //         ],
    //         [
    //           Sequelize.literal(`(
    //           SELECT COUNT(*)
    //           FROM board_dislike AS board_dislike
    //           WHERE
    //           board_dislike.board_id = Board.id
    //         )`),
    //           "dislikeCount",
    //         ],
    //         [
    //           Sequelize.literal(`(
    //           SELECT COUNT(*)
    //           FROM comment AS comment
    //           WHERE
    //           comment.board_id = Board.id
    //         )`),
    //           "commentCount",
    //         ],
    //       ],
    //     },
    //     order: [["id", "DESC"]],
    //     offset: (nowpage - 1) * 30,
    //     limit: 30,
    //   });
    // }
    res.json({
      category: category,
      user: nowuser,
      channel: channel,
      view: view,
      boardlist: boardlist,
      // commentcnt: commentcnt,
      // likecnt: likecnt,
      // dislikecnt: dislikecnt,
    });
  } catch (err) {
    console.error(err);
    res.status(419);
    res.json({ error: err.message });
  }
};
