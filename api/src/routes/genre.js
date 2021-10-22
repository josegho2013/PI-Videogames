const { Router } = require("express");
const router = Router();
const { getGenre } = require("../controller/genre");

router.get("/", getGenre);

module.exports = router;