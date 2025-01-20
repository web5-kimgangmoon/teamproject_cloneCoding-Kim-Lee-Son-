import { Router } from "express";

// import test from "./test/index.js";

import user from "./user.js";
import board from "./board.js";

import admin from "./admin.js";
import movecheck from "../services/user/movecheck.js";
import main from "../services/main.js";

const router = Router();

// router.use("/test", test);

router.use(movecheck);
router.use("/u", user);
router.use("/b", board);
router.use("/a", admin);
router.use("/", main);

export default router;
