import { Router } from "express";
const router = Router();

<<<<<<< HEAD
import test from "../../services/test.js";
=======
router.get("/", (req, res) => {
  res.send("test");
});
>>>>>>> 9719c15 (feat:path '/test' delete async)

router.use("/", test);

export default router;
