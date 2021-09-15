import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, history) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        history
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

export const auth = (data, isSignup, history) => {
    return dispatch => {
        dispatch(authStart());
        let url = isSignup ?
            `${process.env.REACT_APP_API}/user/signup` :
            `${process.env.REACT_APP_API}/user/login`
        axios.post(url, data)
            .then(response => {
                let token = `Bearer ${response.data.detail.token}`;
                localStorage.setItem('token', token);
                dispatch(authSuccess(token, history));
            })
            .catch(err => {
                let errorMessage = isSignup ? "This email address is already being used" : "Wrong email address or password.";
                dispatch(authFail(errorMessage));
            });
    };
};

export const authState = (history) => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            dispatch(authSuccess(token, history));
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