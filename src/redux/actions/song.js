import { API } from "../../config/api";

import {
  GET_SONG, GET_SONG_DETAIL, SONG_SUCCESS, ERROR,
} from "./types";

export const getSong = (limit) => async (dispatch) => {
  try {
    let res = await API.get(`/song?page=1&limit=${limit}`);
    dispatch({
      type: GET_SONG,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

export const getDetailsFilm = (id) => async (dispatch) => {
  try {
    let res = await API.get(`/film/${id}`);
    dispatch({
      type: GET_SONG_DETAIL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

export const addSong = (payload, redirectToMovieList) => async (dispatch) => {
  try {
    const {
      title,
      year,
      thumbnail,
      attache,
      artisId,

    } = payload;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("thumbnail", thumbnail);
    formData.append("year", year);
    formData.append("artisId", artisId);
    formData.append("attache", attache);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    console.log(formData)
    let res = await API.post(`/song`, formData, config);
    dispatch({
      type: SONG_SUCCESS,
      payload: res.data.data,
    });
    redirectToMovieList();

  } catch (err) {
    dispatch({
      type: ERROR,
      // payload: err.response.data.error.message
    });
  }
};
