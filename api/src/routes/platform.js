const { Router } = require("express");
const router = Router();
const { getPlatform } = require("../controllers/platform");

router.get("/", getPlatform);

module.exports = router;
