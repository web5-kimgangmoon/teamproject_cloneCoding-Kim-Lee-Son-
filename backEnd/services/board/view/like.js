import { Board, BoardLike } from "../../../models/index.js";

export default async (req, res) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const nowuser = req.user;
<<<<<<< HEAD
    if (!nowuser) {
=======
    if (nowuser) {
>>>>>>> fe1a391 (status)
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
=======
    const nowuser = req.user;
    if (nowuser) {
>>>>>>> 180d9a7 (feedback and admin)
      throw new Error("not found user");
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
<<<<<<< HEAD
>>>>>>> 4090055 (feat:board complete)
=======
      board.addBoardLike(like);
      nowuser.addBoardLike(like);
>>>>>>> 180d9a7 (feedback and admin)
      res.json({ result: "ok" });
    }
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe1a391 (status)
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "already like") {
      res.status(409);
    } else {
      res.status(419);
    }
<<<<<<< HEAD
=======
>>>>>>> 4090055 (feat:board complete)
=======
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
