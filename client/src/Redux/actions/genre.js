import axios from "axios";

export const getGenres = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/genre`);
    dispatch({ type: "GET_GENRES", payload: data });
  };
};

export const filterByGenre = (genres) => (dispatch, getState) => {
  let gameByGenre = [];

  if (genres === "All") {
    gameByGenre = getState().videogames;
    dispatch({
      type: "FILTER_BY_GENRE",
      payload: gameByGenre,
    });
  } else {
    let games = getState().videogames;
    gameByGenre = games.filter((game) => {
      return game.genres.some((a) => a.name === genres);
    });

    dispatch({
      type: "FILTER_BY_GENRE",
      payload: gameByGenre,
    });
  }
};
