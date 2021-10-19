const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;

async function getGenre(req, res, next) {
  const apiUrl = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  try {
    apiUrl.data.results.forEach((item) => {
      Genre.findOrCreate({ where: { name: item.name } });
    });
    let response = await Genre.findAll();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getGenre,
};
