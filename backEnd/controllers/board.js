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
<<<<<<< HEAD
<<<<<<< HEAD
import channellist from "../services/board/channellist.js";
=======
>>>>>>> 73386c3 (multer and session)
=======
import channellist from "../services/board/channellist.js";
>>>>>>> 5f15296 (allchannellist)

import channel from "../services/board/channel.js";

const router = Router();

router.use("/view", view);

router.post("/category", category);

router.post("/write", write);
router.patch("/modifycheck", modifycheck);
router.patch("/modify", modify);
router.delete("/delete", boarddelete);

router.post("/upload", ...upload);
<<<<<<< HEAD
<<<<<<< HEAD
router.post("/channellist", channellist);
=======
>>>>>>> 73386c3 (multer and session)
=======
router.post("/channellist", channellist);
>>>>>>> 5f15296 (allchannellist)

router.post("/", channel);
=======
=======

import view from "./view.js";

import category from "../services/board/category.js";
<<<<<<< HEAD
// import write from "../services/board/write.js";
>>>>>>> 27a56be (feat : channelmain)
=======

import write from "../services/board/write.js";
import modifycheck from "../services/board/modifycheck.js";
import modify from "../services/board/modify.js";
import boarddelete from "../services/board/boarddelete.js";

import channel from "../services/board/channel.js";

>>>>>>> 4090055 (feat:board complete)
const router = Router();

router.use("/view", view);

router.post("/category", category);

router.post("/write", write);
router.patch("/modifycheck", modifycheck);
router.patch("/modify", modify);
router.delete("/delete", boarddelete);

<<<<<<< HEAD
router.post("/", channelboard);
>>>>>>> 8895f13 (feat:userAll)
=======
router.post("/", channel);
>>>>>>> 27a56be (feat : channelmain)

export default router;
