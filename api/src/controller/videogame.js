const { Op } = require("sequelize");
const axios = require("axios");
const { Videogame, Genre, Platform } = require("../db");
const { API_KEY } = process.env;
const { v4: uuidv4 } = require("uuid");

async function getAllVideogames(req, res, next) {
  try {
    const apiUrl = await axios.get(
      `https://api.rawg.io/api/games?page_size=100&key=${API_KEY}`
    );
    let apiInfo = await apiUrl.data.results.map((el) => {
      return {
        id: el.id,
        name: el.name,
        released: el.released,
        background_image: el.background_image,
        rating: el.rating,
        genres: el.genres,
        platforms: el.platforms.map((p) => {
          return p.platform;
        }),
        short_screenshots: el.short_screenshots,
      };
    });
     
    let dataBase = await Videogame.findAll({
      attributes: [
        "id",
        "name",
        "released",
        "background_image",
        "rating",
        "description",
        "short_screenshots",
      ],
      include: [
        {
          model: Genre,
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          through: {
            attributes: [],
          },
        },
      ],
    });

    let response = apiInfo.concat(dataBase);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function searchByName(req, res, next) {
  const search = req.query.q; // query cuando busdcas un solo dato
  //search in API

  try {
    const apiUrl = await axios.get(
      `https://api.rawg.io/api/games?page_size=100&key=${API_KEY}&search=${search}`
    );
    let apiInfo = await apiUrl.data.results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        released: item.released,
        background_image: item.background_image,
        rating: item.rating,
        description: item.description,
        genres: item.genres,
        platforms: item.platforms.map((e) => {
          return e.platform;
        }),
      };
    });

    //search in DB

    let dataBase = await Videogame.findAll({
      where: {
        name: { [Op.like]: `%${search}%` },
      },
      attributes: [
        "id",
        "name",
        "released",
        "background_image",
        "rating",
        "description",
      ],
      include: [
        {
          model: Genre,
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          through: {
            attributes: [],
          },
        },
      ],
    });
    let response = apiInfo.concat(dataBase);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function getGameById(req, res, next) {
  const id = req.params.id;

  if (id.includes("-")) {
    try {
      const gameId = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.status(200).json(gameId);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );

      let game = {
        id: data.id,
        name: data.name,
        description: data.description,
        released: data.released,
        background_image: data.background_image,
        rating: data.rating,
        genres: data.genres,
        platforms: data.platforms.map((e) => {
          return e.platform;
        }),
      };
      return res.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }
}



module.exports = {
  getAllVideogames,
  searchByName,
  getGameById,
 
};
