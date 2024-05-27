import { Router } from "express";

const router = Router();

import views from "../services/board/view/view.js";
import like from "../services/board/view/like.js";
import dislike from "../services/board/view/dislike.js";
import add from "../services/board/view/add.js";
import modify from "../services/board/view/modify.js";
import cmtdelete from "../services/board/view/cmtdelete.js";

router.post("/", views);
router.post("/like", like);
router.post("/dislike", dislike);
router.post("/add", add);
router.patch("/modify", modify);
router.delete("/delete", cmtdelete);

export default router;
