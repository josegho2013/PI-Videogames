import axios from "axios";

export const getVideogames = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/videogame`);
    dispatch({ type: "GET_GAMES", payload: data });
  };
};

export const addGame = (payload) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/videogame/create`, payload);
    dispatch({ type: "ADD_GAME", payload: data });
  };
};

export const searchByName = (payload) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/videogame/search?q=${payload}`);
    dispatch({ type: "SEARCH_BY_NAME", payload: data });
  };
};


export function getGameById(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`videogame/gameDetail/${id}`);
    dispatch({ type: "SEARCH_BY_ID", payload: data });
  };
}
export const filterByOrder = (payload) => {
  return async (dispatch) => {
    dispatch({ type: "FILTER_ORDER", payload: payload });
  };
};

export const filterByRating = (payload) => {
  return async (dispatch) => {
    dispatch({ type: "FILTER_RATING", payload: payload });
  };
};
