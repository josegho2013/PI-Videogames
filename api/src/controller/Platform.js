const { Platform } = require("../db");

async function getPlatform(req, res, next) {
  try {
    Platform.findAll({
      attributes: ["id", "name"],
    }).then((resp) => {
      res.json(resp);
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getPlatform,
};
