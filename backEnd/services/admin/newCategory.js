import { Channel, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    const reqbody = req.body;
    const chname = reqbody.channel;

    const nowchannel = await Channel.findOne({
      where: { engTitle: chname },
    });

    const catrgory = await Category.create(reqbody);
    await nowchannel.addCategory(catrgory);

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(419);
=======
>>>>>>> 180d9a7 (feedback and admin)
=======
    res.status(419);
>>>>>>> fe1a391 (status)
    res.json({ error: err.message });
  }
};
