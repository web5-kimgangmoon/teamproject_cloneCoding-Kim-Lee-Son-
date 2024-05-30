import { User } from "../../models/index.js";

export default async (req, res, next) => {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 73386c3 (multer and session)
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
<<<<<<< HEAD
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
<<<<<<< HEAD
      //     maxAge: 0,
      //     signed: true,
      //   });
=======
    if (req.signedCookies.user) {
=======
>>>>>>> 73386c3 (multer and session)
      req.user = await User.findOne({
        where: { id: req.session.user },
      });
<<<<<<< HEAD
      res.cookie("user", {
        maxAge: 60 * 60 * 1000,
        signed: true,
      });
>>>>>>> 8895f13 (feat:userAll)
=======
      // res.cookie("user", {
      //   maxAge: 60 * 60 * 1000,
      //   signed: true,
      // });
      // } else {
      //   req.session.destroy();
      //   await res.cookie("user-session", "", {
=======
>>>>>>> fe1a391 (status)
      //     maxAge: 0,
      //     signed: true,
      //   });
>>>>>>> ec829b9 (임시)
    }
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
};
