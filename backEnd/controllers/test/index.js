import { Router } from "express";
const router = Router();

import test from "../../services/test.js";

router.get("/", test);

export default router;
