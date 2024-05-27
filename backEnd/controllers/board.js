import { Router } from "express";

import channel from "../services/board/channel.js";
import view from "../services/board/view.js";
import category from "../services/board/category.js";
// import write from "../services/board/write.js";
const router = Router();

router.post("/view", view);
router.post("/category", category);
// router.post("/write", write);

router.post("/", channel);

export default router;
