import {
    ARTIST_SUCCESS,
    ARTIST_FAILED,


} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
};
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case ARTIST_SUCCESS:
            return {
                ...state,
                artistAll: payload,
                loading: false
            };

        case ARTIST_FAILED:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;

    }
}
