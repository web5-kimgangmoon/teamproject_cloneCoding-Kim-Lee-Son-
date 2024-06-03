import {
  Channel,
  ChannelAdmin,
  Category,
  Board,
  BoardLike,
  BoardDislike,
  Comment,
<<<<<<< HEAD
<<<<<<< HEAD
  sequelize,
  Sequelize,
  User,
<<<<<<< HEAD
=======
>>>>>>> 4090055 (feat:board complete)
=======
  sequelize,
>>>>>>> 180d9a7 (feedback and admin)
=======
>>>>>>> fe1a391 (status)
} from "../../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
<<<<<<< HEAD
<<<<<<< HEAD
    let chname = reqbody.channel;
    let catename = reqbody.category;
    const nowuser = req.user;

    const reqcuery = req.query;
    let nowpage = reqcuery.page;
    let nowview = reqcuery.boardId;
<<<<<<< HEAD
<<<<<<< HEAD
    // let commentpage = reqcuery.commentpage;

    if (!nowview) {
      nowview = 1;
    }

    if (!nowpage) {
      nowpage = 1;
    }
    if (!chname) {
      chname = "main";
    }
    // if (!commentpage) {
    //   commentpage = 1;
    // }

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
          include: [{ model: User, attributes: ["nick"] }],
          // offset: (commentpage - 1) * 50, // 댓글 한번에 보여주는 수 관련
          // limit: 50,  // 댓글 한번에 보여주는 수 관련
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
          attributes: ["engTitle", "name"],
        },
        { model: User, attributes: ["nick", "profilImg"] },
      ],
    });

    if (!view) {
      throw new Error("not find board");
    }

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

=======
    const chname = reqbody.channel;
    const catename = reqbody.category;
=======
    let chname = reqbody.channel;
    let catename = reqbody.category;
>>>>>>> 73386c3 (multer and session)
    const nowuser = req.user;

    const reqcuery = req.query;
    let nowpage = reqcuery.page;
    const nowview = reqcuery.boardId;
=======
>>>>>>> 6243287 (view)
    let commentpage = reqcuery.commentpage;
=======
    // let commentpage = reqcuery.commentpage;
>>>>>>> c2bd4f9 (요청수정)

    if (!nowview) {
      nowview = 1;
    }

    if (!nowpage) {
      nowpage = 1;
    }
    if (!chname) {
      chname = "main";
    }
    // if (!commentpage) {
    //   commentpage = 1;
    // }

    let channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin, include: [{ model: User, attributes: ["nick"] }] }],
    });
    if (!channel) {
      channel = await Channel.findOne({
        where: { engTitle: "main" },
        include: [{ model: ChannelAdmin, include: [{ model: User, attributes: ["nick"] }] }],
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
          include: [{ model: User, attributes: ["nick"] }],
          // offset: (commentpage - 1) * 50, // 댓글 한번에 보여주는 수 관련
          // limit: 50,  // 댓글 한번에 보여주는 수 관련
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4090055 (feat:board complete)
=======
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
=======
=======
    if (!view) {
      throw new Error("not find board");
    }

>>>>>>> 6243287 (view)
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
>>>>>>> fe1a391 (status)

>>>>>>> 73386c3 (multer and session)
    await Board.update(
      { viewPoint: view.viewPoint + 1 },
      {
        where: { id: nowview },
      }
    );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      view: view,
      boardlist: boardlist,
      boardcount: boardcount,
      // commentcnt: commentcnt,
      // likecnt: likecnt,
      // dislikecnt: dislikecnt,
    });
  } catch (err) {
    console.error(err);
    if (err.message == "not find board") {
      res.status(405);
    } else {
      res.status(419);
    }
=======
=======
    // console.log(catename);

>>>>>>> 180d9a7 (feedback and admin)
=======
    let listcheck = false;
=======
    let catecheck = false;
>>>>>>> ec829b9 (임시)
    let category = await Category.findAll({
      where: { channelId: channel.id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
>>>>>>> 73386c3 (multer and session)
    if (catename) {
      category = await Category.findOne({
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
      category: category,
      user: nowuser,
      channel: channel,
      view: view,
      boardlist: boardlist,
      boardcount: boardcount,
      // commentcnt: commentcnt,
      // likecnt: likecnt,
      // dislikecnt: dislikecnt,
    });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4090055 (feat:board complete)
=======
    res.status(419);
>>>>>>> fe1a391 (status)
=======
    if (err.message == "not find board") {
      res.status(405);
    } else {
      res.status(419);
    }
>>>>>>> 6243287 (view)
    res.json({ error: err.message });
  }
};
