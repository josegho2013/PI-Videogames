const { Router } = require("express");
const router = Router();
const {
  getAllVideogames,
  searchByName,
  getGameById,
  createGame,
} = require("../controllers/videogame");

router.get("/", getAllVideogames);
router.get("/search", searchByName);
router.get("/gameDetail/:id", getGameById);
router.post("/create", createGame);

module.exports = router;
