import { Router } from "express";
import session from "express-session";
import FileStor from "session-file-store";
const FileStore = FileStor(session);

// import test from "./test/index.js";

import user from "./user.js";
import board from "./board.js";

import admin from "./admin.js";
import movecheck from "../services/user/movecheck.js";

const router = Router();

// router.use("/test", test);
router.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "test",
    name: "user-session",
    store: new FileStore({
      reapInterval: 10,
      path: "./test-session",
    }),
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);
router.use(movecheck);
router.use("/u", user);
router.use("/b", board);

router.use("/a", admin);

export default router;
