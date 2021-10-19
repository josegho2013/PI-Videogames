export const filterByPlatform = (platform) => (dispatch, getState) => {
  let gameByPlatform = [];

  if (platform === "All") {
    gameByPlatform = getState().videogames;
    dispatch({
      type: "FILTER_BY_PLATFORM",
      payload: gameByPlatform,
    });
  } else {
    let games = getState().videogames;
    gameByPlatform = games.filter((game) => {
      return game.platforms.some((a) => a.name === platform);
    });

    dispatch({
      type: "FILTER_BY_PLATFORM",
      payload: gameByPlatform,
    });
  }
};
