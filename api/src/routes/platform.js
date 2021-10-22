const { Router } = require("express");
const router = Router();
const { getPlatform } = require("../controller/platform");

router.get("/", getPlatform);

module.exports = router;
