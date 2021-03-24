/* Modules */

import {authAPI, profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

/* Action types */

const CHANGE_VALUE_IS_FETCHING_AUTH = 'auth-reducer/CHANGE-VALUE-IS-FETCHING-OF-AUTH';
const CHANGE_AUTH_USER_INFO = 'auth-reducer/CHANGE-AUTH-USER-INFO';
const CHANGE_AUTH_VALUE = 'auth-reducer/CHANGE-AUTH-VALUE';

/* Action creators */

export const changeValueIsFetchingAuth = value => ({type: CHANGE_VALUE_IS_FETCHING_AUTH, value});
export const changeAuthUserInfo = (id, avatar, name, status, email) => ({
    type: CHANGE_AUTH_USER_INFO,
    info: {id, avatar, name, status, email}
});
export const changeAuthValue = value => ({type: CHANGE_AUTH_VALUE, value});

/* Initial state */

const initialState = {
    isAuth: false,
    isFetchingAuth: true,
    id: null,
    avatar: null,
    name: null,
    status: null,
    email: null
};

/* Reducer */

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE_IS_FETCHING_AUTH: {
            return {
                ...state,
                isFetchingAuth: action.value
            };
        }
        case CHANGE_AUTH_VALUE: {
            return {
                ...state,
                isAuth: action.value
            };
        }
        case CHANGE_AUTH_USER_INFO: {
            return {
                ...state,
                ...action.info
            }
        }
        default:
            return state;
    }
};

/* Thunk creator */

export const auth = () => async dispatch => {
    dispatch(changeValueIsFetchingAuth(true));

    const data = await authAPI.me();

    const {
        id,
        login,
        email
    } = data.data;

    if (data.messages.length === 0) {
        const status = await profileAPI.getStatus(id);
        const profileInfo = await profileAPI.getProfile(id);

        const avatarUser = profileInfo.photos.large;

        dispatch(changeValueIsFetchingAuth(false));
        dispatch(changeAuthValue(true));
        dispatch(changeAuthUserInfo(id, avatarUser, login, status, email));
    } else {
        dispatch(changeValueIsFetchingAuth(false));
        dispatch(changeAuthValue(false));
    }
};

export const login = (email, password, rememberMe, captcha = true) => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.messages.length === 0)
        dispatch(auth());
    else
        dispatch(stopSubmit('login-form', {_error: 'Неправильный логин или пароль'}))
};

export const logout = () => async dispatch => {
    await authAPI.logout();

    dispatch(auth());
};