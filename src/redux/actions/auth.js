import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	GET_USERLOGIN,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_PROFILE,
	CLEAR_AUTH_ERROR
} from './types';

import { API, setAuthToken } from '../../config/api';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await API.get('/auth');
		dispatch({
			type: GET_USERLOGIN,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

export const handleRegister = (
	email,
	password,
	fullName,
	gender,
	phone,
	address,
	showModalRegister
) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({
		email,
		password,
		fullName,
		gender,
		phone,
		address,
		role: 2
	});

	try {
		const res = await API.post('/register', body, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data.data
		});

		dispatch(loadUser());
		showModalRegister();
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.error.message
		});
	}
};

export const handleLogin = (email, password, showModalLogin) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await API.post('/login', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data.data
		});

		dispatch(loadUser());
		showModalLogin();
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response.data.error.message
		});
	}
};

export const handleLogout = () => (dispatch) => {
	dispatch({
		type: CLEAR_PROFILE
	});
	dispatch({
		type: LOGOUT
	});
};

export const clearError = () => (dispatch) => {
	dispatch({
		type: CLEAR_AUTH_ERROR
	});
};
