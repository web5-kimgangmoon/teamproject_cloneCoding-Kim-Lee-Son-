const router = require("express").Router();
const test = require("../../services/test.js");

router.get("/", test);

module.exports = router;
