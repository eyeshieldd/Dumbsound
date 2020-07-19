import {
    ARTIST_SUCCESS,
    ARTIST_FAILED,
    ARTIST_POST_SUCCESS,
    ARTIST_POST_FAILED

} from './types';

import { API, setAuthToken } from '../../config/api';
export const handleArtist = (
    name,
    old,
    genre,
    start,
    redirectToMovieList

) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        name,
        old,
        genre,
        start,
    });

    try {
        const res = await API.post('/artist', body, config);
        dispatch({
            type: ARTIST_POST_SUCCESS,
            payload: res.data.data,
        });
        redirectToMovieList();

    } catch (err) {
        dispatch({
            type: ARTIST_POST_FAILED
            ,
            payload: err.response.data.error.message
        });
    }
};


export const getArtist = () => async (dispatch) => {
    try {
        let res = await API.get(`/artist`);
        dispatch({
            type: ARTIST_SUCCESS,
            payload: res.data.data,
        });
    } catch (err) {
        dispatch({
            type: ARTIST_FAILED,
            payload: "error",
        });
    }
};
