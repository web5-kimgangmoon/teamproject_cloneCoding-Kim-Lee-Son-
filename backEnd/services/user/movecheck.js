import { User, ChannelAdmin } from "../../models/index.js";

export default async (req, res, next) => {
  try {
    if (req.signedCookies.user) {
      req.user = await User.findOne({
        where: { id: req.signedCookies.user },
        include: [
          {
            model: ChannelAdmin,
          },
        ],
      });
      res.cookie("user", req.signedCookies.user, {
        maxAge: 60 * 60 * 1000,
        // httpOnly: true,
        // secure: true,
        signed: true,
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
