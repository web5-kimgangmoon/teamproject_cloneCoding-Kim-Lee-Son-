import { Router } from "express";
<<<<<<< HEAD
<<<<<<< HEAD

import view from "./view.js";

import category from "../services/board/category.js";

import write from "../services/board/write.js";
import modifycheck from "../services/board/modifycheck.js";
import modify from "../services/board/modify.js";
import boarddelete from "../services/board/boarddelete.js";
import upload from "../services/board/upload.js";
import channellist from "../services/board/channellist.js";

import channel from "../services/board/channel.js";

const router = Router();

router.use("/view", view);

router.post("/category", category);

router.post("/write", write);
router.patch("/modifycheck", modifycheck);
router.patch("/modify", modify);
router.delete("/delete", boarddelete);

router.post("/upload", ...upload);
router.post("/channellist", channellist);

router.post("/", channel);
=======
=======

import channel from "../services/board/channel.js";
import view from "../services/board/view.js";
import category from "../services/board/category.js";
// import write from "../services/board/write.js";
>>>>>>> 27a56be (feat : channelmain)
const router = Router();

router.post("/view", view);
router.post("/category", category);
// router.post("/write", write);

<<<<<<< HEAD
router.post("/", channelboard);
>>>>>>> 8895f13 (feat:userAll)
=======
router.post("/", channel);
>>>>>>> 27a56be (feat : channelmain)

export default router;
