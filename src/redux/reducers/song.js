import {
  GET_SONG,
  GET_SONG_DETAIL,
  LOADING_TRUE,
  ERROR,
} from "../actions/types";

const initialState = {
  loading: true,
  singSong: [],
  filmsMovies: [],
  filmsTVSeries: [],
  filmDetails: null,
  error: "",
};

export default function (state = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case GET_SONG:
      return {
        ...state,
        singSong: payload,
        loading: false,
      };

    case GET_SONG_DETAIL:
      return {
        ...state,
        singSong: payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
