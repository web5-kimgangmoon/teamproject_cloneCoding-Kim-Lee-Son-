import { Router } from "express";

import view from "./view.js";

import category from "../services/board/category.js";

import write from "../services/board/write.js";
import modifycheck from "../services/board/modifycheck.js";
import modify from "../services/board/modify.js";
import boarddelete from "../services/board/boarddelete.js";
import upload from "../services/board/upload.js";

import channel from "../services/board/channel.js";

const router = Router();

router.use("/view", view);

router.post("/category", category);

router.post("/write", write);
router.patch("/modifycheck", modifycheck);
router.patch("/modify", modify);
router.delete("/delete", boarddelete);

router.post("/upload", ...upload);

router.post("/", channel);

export default router;
