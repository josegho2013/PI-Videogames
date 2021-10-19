const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const RouterVideogame = require("./videogame");
const RouterGenre = require("./genre");
const RouterPlatform = require("./platform");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogame", RouterVideogame);
router.use("/genre", RouterGenre);
router.use("/platform", RouterPlatform);

module.exports = router;
