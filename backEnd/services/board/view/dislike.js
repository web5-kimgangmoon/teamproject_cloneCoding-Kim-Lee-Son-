import { Board, BoardDislike } from "../../../models/index.js";

export default async (req, res) => {
  try {
<<<<<<< HEAD
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }
    const reqcuery = req.query;
    const nowview = reqcuery.boardId;
    const board = await Board.findOne({
      where: { id: nowview },
    });

    const already = await BoardDislike.findOne({
      where: { boardId: board.id, userId: nowuser.id },
    });

    if (already) {
      throw new Error("already dislike");
    } else {
      const dislike = await BoardDislike.create({
        dislike: 1,
      });
      board.addBoardDislike(dislike);
      nowuser.addBoardDislike(dislike);
=======
    const reqcuery = req.query;
    // const nowview = reqcuery.boardId;
    const nowview = 1;
    const dislike = await Board.findOne({
      where: { boardId: nowview },
      include: {
        model: BoardDislike,
        where: { userId: req.user.id },
      },
    });
    if (!req.user) {
      throw new Error("not found user");
    } else if (dislike) {
      throw new Error("already dislike");
    } else {
      await BoardDislike.create({
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
    } else if (err.message == "already dislike") {
      res.status(409);
    } else {
      res.status(419);
    }
=======
>>>>>>> 4090055 (feat:board complete)
    res.json({ error: err.message });
  }
};
