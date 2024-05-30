import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const reqbody = req.body;
    console.log(reqbody);
    if (reqbody.contents == "" || reqbody.title == "" || reqbody.category == "") {
      throw new Error("not empty contents");
    }
    if (!req.user) {
      throw new Error("not logged in");
    }

    const chname = reqbody.channel;
    const catename = reqbody.category;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });

    const board = await Board.create(reqbody);
    category.addBoard(board);
    req.user.addBoard(board);
    channel.addBoard(board);

    res.json({ result: "ok", nowboard: board.id });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not empty contents") {
      res.status(400);
    } else {
      res.status(419);
    }
<<<<<<< HEAD
=======
=======
    const reqbody = req.body;
    console.log(reqbody);
    if (reqbody.contents == "" || reqbody.title == "" || reqbody.category == "") {
      throw new Error("not empty contents");
    }
>>>>>>> 73386c3 (multer and session)
    if (!req.user) {
      throw new Error("not logged in");
    }

    const chname = reqbody.channel;
    const catename = reqbody.category;

    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });

    const board = await Board.create(reqbody);
    category.addBoard(board);
    req.user.addBoard(board);
    channel.addBoard(board);

    res.json({ result: "ok", nowboard: board.id });
  } catch (err) {
    console.error(err);
>>>>>>> 27a56be (feat : channelmain)
=======
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
