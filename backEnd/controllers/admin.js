import { Router } from "express";

const router = Router();

import newChannel from "../services/admin/newChannel.js";
import admincheck from "../services/admin/admincheck.js";
import modifyChannel from "../services/admin/modifyChannel.js";
import deleteChannel from "../services/admin/deleteChannel.js";
import newCategory from "../services/admin/newCategory.js";
import modifyCategory from "../services/admin/modifyCategory.js";
import deleteCategory from "../services/admin/deleteCategory.js";

import deleteUser from "../services/admin/deleteUser.js";
import newSubadmin from "../services/admin/newSubadmin.js";
import deleteSubadmin from "../services/admin/deleteSubadmin.js";

router.post("/newchannel", newChannel);
router.use(admincheck);
router.patch("/modifyChannel", modifyChannel);
router.delete("/deleteChannel", deleteChannel);
router.post("/newCategory", newCategory);
router.patch("/modifyCategory", modifyCategory);
router.delete("/deleteCategory", deleteCategory);

router.delete("/deleteUser", deleteUser);
router.post("/newSubadmin", newSubadmin);
router.delete("/deleteSubadmin", deleteSubadmin);

export default router;
