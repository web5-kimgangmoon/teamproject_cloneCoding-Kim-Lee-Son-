import { User } from "../../models/index.js";

export default async (req, res, next) => {
  try {
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
      //   await res.cookie("user-session", "", {
      //     maxAge: 0,
      //     signed: true,
      //   });
    }
  } catch (err) {
    console.error(err);
  } finally {
    console.log(req.user);
    next();
  }
};
