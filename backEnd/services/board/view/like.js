import { Board, BoardLike } from "../../../models/index.js";

export default async (req, res) => {
  try {
<<<<<<< HEAD
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqcuery = req.query;
    const nowview = reqcuery.boardId;
    // const nowview = 1;
    const board = await Board.findOne({
      where: { id: nowview },
    });

    const already = await BoardLike.findOne({
      where: { boardId: board.id, userId: nowuser.id },
    });

    if (already) {
      throw new Error("already like");
    } else {
      const like = await BoardLike.create({
        like: 1,
      });
      board.addBoardLike(like);
      nowuser.addBoardLike(like);
=======
    const reqcuery = req.query;
    // const nowview = reqcuery.boardId;
    const nowview = 1;
    const like = await Board.findOne({
      where: { boardId: nowview },
      include: {
        model: BoardLike,
        where: { userId: req.user.id },
      },
    });
    if (!req.user) {
      throw new Error("not found user");
    } else if (dislike) {
      throw new Error("already like");
    } else {
      await BoardLike.create({
        boardId: nowview,
        userId: req.user.id,
        dislike: 1,
      });
>>>>>>> 4090055 (feat:board complete)
      res.json({ result: "ok" });
    }
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "already like") {
      res.status(409);
    } else {
      res.status(419);
    }
=======
>>>>>>> 4090055 (feat:board complete)
    res.json({ error: err.message });
  }
};
