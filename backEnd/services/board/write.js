import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (!req.user) {
      throw new Error("not logged in");
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err.message });
  }
};
