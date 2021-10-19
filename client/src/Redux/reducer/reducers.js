const initialState = {
  videogame: [],
  searchById: [],
  addVideogame: [],
  
  requestGame: [],

  filters: {
    order: "",
    rating: "",
    genre: [],
    platform: [],
  },
};

function reducerGame(state = initialState, action) {
  switch (action.type) {
    case "GET_GAMES":
      return {
        ...state,
        videogames: action.payload,
        requestGame: action.payload,
        filters: {
          ...state.filters,
          platform: action.payload.map((e) => {
            return e.platforms;
          }),
        },
      };
    case "ADD_GAME":
      return {
        ...state,
        addVideogame: action.payload,
      };
    case "SEARCH_BY_ID":
      return {
        ...state,
        searchById: action.payload,
      };

    case "SEARCH_BY_NAME":
    case "FILTER_BY_GENRE":
    case "FILTER_BY_PLATFORM":
      return {
        ...state,
        requestGame: action.payload,
      };

    case "FILTER_ORDER": {
      return {
        ...state,
        filters: {
          ...state.filters,
          order: action.payload,
        },
      };
    }
    case "GET_GENRES": {
      return {
        ...state,
        filters: {
          ...state.filters,
          genre: action.payload,
        },
      };
    }
    case "FILTER_RATING": {
      return {
        ...state,
        filters: {
          ...state.filters,
          rating: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default reducerGame;
