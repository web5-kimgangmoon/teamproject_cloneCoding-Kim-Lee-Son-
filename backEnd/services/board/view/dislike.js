import { Board, BoardDislike } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (nowuser) {
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
      board.addBoardDislike(dislike);
      nowuser.addBoardDislike(dislike);
      res.json({ result: "ok" });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
