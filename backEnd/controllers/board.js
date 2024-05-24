import { Router } from "express";
const router = Router();

import channelboard from "../services/board/channelboard.js";

router.post("/", channelboard);

export default router;
