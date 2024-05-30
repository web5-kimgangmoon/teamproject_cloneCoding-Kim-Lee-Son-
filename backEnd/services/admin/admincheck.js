import { Channel, ChannelAdmin } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
    }

    const reqbody = req.body;
    const chname = reqbody.channel;

    const nowchannel = await Channel.findOne({
      attributes: ["id"],
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin, where: { userId: nowuser.id } }],
    });

    console.log(nowuser);

    if (!nowchannel) {
      throw new Error("not admin");
    }
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe1a391 (status)
    if (err.message == "not admin") {
      res.status(403);
    } else if (err.message == "not logged in") {
      res.status(401);
    } else {
      res.status(419);
    }
<<<<<<< HEAD
=======
>>>>>>> 180d9a7 (feedback and admin)
=======
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  } finally {
    next();
  }
};
