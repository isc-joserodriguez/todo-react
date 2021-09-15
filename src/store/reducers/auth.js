import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    tabActive: '1',
    token: null,
    error: null,
    loading: false,
    showModal: false
}

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, { token: null });
}

const toggleAuthModal = (state, action) => {
    return updateObject(state, {
        tabActive: action.tab,
        showModal: action.showModal
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.TOGGLE_AUTH_MODAL: return toggleAuthModal(state, action);
        default: return state;
    }
}

export default reducer;