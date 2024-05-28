import { User, ChannelAdmin } from "../../models/index.js";

export default async (req, res, next) => {
  try {
<<<<<<< HEAD
    // if (req.signedCookies.user) {
    //   req.user = await User.findOne({
    //     where: { id: req.signedCookies.user },
    //   });
    //   res.cookie("user", req.signedCookies.user, {
    //     maxAge: 60 * 60 * 1000,
    //     // httpOnly: true,
    //     // secure: true,
    //     signed: true,
    //   });
    // }
    if (req.session.user) {
      req.user = await User.findOne({
        where: { id: req.session.user },
      });
      // res.cookie("user", {
      //   maxAge: 60 * 60 * 1000,
      //   signed: true,
      // });
      // } else {
      //   req.session.destroy();
      //   res.cookie("user-session", "", {
      //     maxAge: 0,
      //     signed: true,
      //   });
=======
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
>>>>>>> 8895f13 (feat:userAll)
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
