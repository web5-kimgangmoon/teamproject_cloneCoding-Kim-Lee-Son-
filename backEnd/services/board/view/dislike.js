import { Board, BoardDislike } from "../../../models/index.js";

export default async (req, res) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const nowuser = req.user;
<<<<<<< HEAD
<<<<<<< HEAD
    if (!nowuser) {
=======
    if (nowuser) {
>>>>>>> fe1a391 (status)
=======
    if (!nowuser) {
>>>>>>> 53d11f5 (like error modify)
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
=======
    const nowuser = req.user;
    if (nowuser) {
>>>>>>> 180d9a7 (feedback and admin)
      throw new Error("not found user");
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
<<<<<<< HEAD
>>>>>>> 4090055 (feat:board complete)
=======
      board.addBoardDislike(dislike);
      nowuser.addBoardDislike(dislike);
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
    } else if (err.message == "already dislike") {
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
