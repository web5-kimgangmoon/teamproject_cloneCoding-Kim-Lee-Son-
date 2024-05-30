import {
  Channel,
  ChannelAdmin,
  Category,
  Board,
  BoardLike,
  BoardDislike,
  Comment,
  sequelize,
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
      attributes: [
        "id",
        "viewPoint",
        "title",
        "contents",
        "createdAt",
        "updatedAt",
        // [sequelize.fn("count", sequelize.col("BoardLikes.id")), "like"],
        // [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "dislike"],
      ],

      include: [
        {
          model: Comment,
          order: [["id", "DESC"]],
          offset: (commentpage - 1) * 50,
          limit: 50,
          include: [
            {
              model: Comment,
              as: "children",
              include: [
                {
                  model: Comment,
                  as: "children",
                },
              ],
            },
          ],
        },
        {
          model: Category,
        },
      ],
      group: ["id"],
    });

    const commentcnt = await Comment.findAll({
      where: { boardId: nowview },
      attributes: [[sequelize.fn("count", "boardId"), "cnt"]],
      group: ["board_id"],
    });
    const likecnt = await BoardLike.findAll({
      where: { boardId: nowview },
      attributes: [[sequelize.fn("count", "boardId"), "cnt"]],
      group: ["board_id"],
    });
    const dislikecnt = await BoardDislike.findAll({
      where: { boardId: nowview },
      attributes: [[sequelize.fn("count", "boardId"), "cnt"]],
      group: ["board_id"],
    });

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
      include: [
        { model: BoardLike },
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
    if (catecheck) {
      boardlist = await Board.findAll({
        where: { channelId: channel.id, categoryId: category.id },
        include: [
          { model: BoardLike },
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
      view: view,
      boardlist: boardlist,
      commentcnt: commentcnt,
      likecnt: likecnt,
      dislikecnt: dislikecnt,
    });
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
