import { Router } from "express";
const router = Router();

import regist from "../services/user/regist.js";
import login from "../services/user/login.js";
import logout from "../services/user/logout.js";
import userInfo from "../services/user/userInfo.js";
import withdraw from "../services/user/withdraw.js";

router.post("/regist", regist);
router.post("/login", login);
router.post("/logout", logout);
router.post("/userInfo", userInfo);
router.delete("/withdraw", withdraw);

export default router;
