import { Channel, Board } from "../models/index.js";

export default async (req, res) => {
  try {
    const channellist = await Channel.findAll({
      include: [
        {
          model: Board,
          attributes: ["title"],
          where: { notice: false },
          order: [["id", "DESC"]],
          offset: 0,
          limit: 10,
        },
      ],
      attributes: ["title", "engTitle"],

      order: [["updatedAt", "DESC"]],
      offset: 0,
      limit: 30,
    });

    res.json({ channellist: channellist });
  } catch (err) {
    console.error(err);
    res.status(419);
    res.json({ error: err.message });
  }
};
