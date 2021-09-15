import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const auth = (data, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        let url = `${process.env.REACT_APP_API}/signup`;
        if (!isSignup) url = `${process.env.REACT_APP_API}/login`
        axios.post(url, data)
            .then(response => {
                localStorage.setItem('token', response.detail.token);
                dispatch(authSuccess(response.detail.token));
            })
            .catch(err => {
                dispatch(authFail('Something wrong'));
            });
    };
};

export const authState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(token));
        }
    };
};

export const authModal = (tab, showModal) => {
    return dispatch => {
        dispatch(toggleAuthModal(tab, showModal));
    }
}

export const toggleAuthModal = (tab, showModal) => {
    return {
        type: actionTypes.TOGGLE_AUTH_MODAL,
        tab,
        showModal
    }
}