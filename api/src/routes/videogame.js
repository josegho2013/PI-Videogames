const { Router } = require("express");
const router = Router();
const {
  getAllVideogames,
  searchByName,
  getGameById,
 
} = require("../controller/videogame");

router.get("/", getAllVideogames);
router.get("/search", searchByName);
router.get("/gameDetail/:id", getGameById);


module.exports = router;
