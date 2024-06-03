import { Router } from "express";
const router = Router();

import test from "../../services/test.js";

router.use("/", test);

export default router;
