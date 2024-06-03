import { Board, BoardLike } from "../../../models/index.js";

export default async (req, res) => {
  try {
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
      res.json({ result: "ok" });
    }
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "already like") {
      res.status(409);
    } else {
      res.status(419);
    }
    res.json({ error: err.message });
  }
};
