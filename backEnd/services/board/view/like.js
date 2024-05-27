import { Board, BoardLike } from "../../../models/index.js";

export default async (req, res) => {
  try {
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
      res.json({ result: "ok" });
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
