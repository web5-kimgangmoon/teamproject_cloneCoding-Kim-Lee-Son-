import { Channel, ChannelAdmin, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    } // 유저가아니면 자동으로 되돌려줌

    const reqbody = req.body;
    const chname = reqbody.channel;

    const reqcuery = req.query;
<<<<<<< HEAD
<<<<<<< HEAD
    const nowview = reqcuery.boardId;
    // const nowview = 1;
=======
    // const nowview = reqcuery.boardId;
    const nowview = 1;
>>>>>>> 4090055 (feat:board complete)
=======
    const nowview = reqcuery.boardId;
    // const nowview = 1;
>>>>>>> 180d9a7 (feedback and admin)
    const channel = await Channel.findOne({
      where: { engTitle: chname },
    });

    const board = await Board.findOne({
      where: { id: nowview, userId: nowuser.id },
    });
    const channeladmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id, userId: nowuser.id },
    });
    if (!board || !channeladmin) {
      throw new Error("not match user");
    }

    await Board.destroy({
      where: { id: nowview },
    });
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe1a391 (status)
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
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
