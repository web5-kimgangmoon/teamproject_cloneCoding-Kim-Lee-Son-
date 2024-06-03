import { Channel } from "../../models/index.js";

export default async (req, res) => {
  try {
    let allchannellist = await Channel.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    });
    res.json({ allchannellist: allchannellist });
  } catch (err) {
    console.error(err);
    res.status(419);
    res.json({ error: err.message });
  }
};
