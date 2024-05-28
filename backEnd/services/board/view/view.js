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
    const chname = reqbody.channel;
    const catename = reqbody.category;
    const nowuser = req.user;

    const reqcuery = req.query;
    const nowpage = reqcuery.page;
    const nowview = reqcuery.boardId;
    const commentpage = reqcuery.commentpage;

    // const nowpage = 1;
    // const nowview = 1;
    // const commentpage = 1;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
      include: [
        {
          model: ChannelAdmin,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
      ],
    });
    // const channemAdmin = await ChannelAdmin.findAll({
    //   where: { channelId: channel.id },
    // });

    const view = await Board.findOne({
      where: { id: nowview },
      attributes: [
        "id",
        "viewPoint",
        "title",
        "contents",
        "createdAt",
        "updatedAt",
        [sequelize.fn("count", sequelize.col("BoardLikes.id")), "like"],
        [sequelize.fn("count", sequelize.col("BoardDislikes.id")), "dislike"],
      ],

      include: [
        { model: BoardLike, attributes: [] },
        { model: BoardDislike, attributes: [] },
        {
          model: Comment,
          order: [["id", "DESC"]],
          offset: (commentpage - 1) * 50,
          limit: 50,
          // as: "boardCt",
          include: [
            {
              model: Comment,
              as: "children",
              include: [
                {
                  model: Comment,
                  as: "parent",
                },
              ],
            },
          ],
        },
        {
          model: Category,
        },
        // { model: Comment, as: "boardCt" },
      ],
      group: ["id"],
    });

    await Board.update(
      { viewPoint: view.viewPoint + 1 },
      {
        where: { id: nowview },
      }
    );

    // console.log(catename);

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
            ],
            group: ["id"],
          },
        ],
      });
      res.json({
        category: category,
        user: nowuser,
        channel: channel,
        // channemAdmin: channemAdmin,
        view: view,
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
            ],
            group: ["id"],
          },
        ],
      });
      res.json({
        category: category,
        user: nowuser,
        channel: channel,
        // channemAdmin: channemAdmin,
        view: view,
      });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
