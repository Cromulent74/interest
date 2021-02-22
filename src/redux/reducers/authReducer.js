/* Modules */

import {authAPI, profileAPI} from "../../api/api";

/* Action types */

const CHANGE_VALUE_IS_FETCHING_AUTH = 'CHANGE VALUE IS FETCHING OF AUTH';
const CHANGE_AUTH_USER_INFO = 'CHANGE AUTH USER INFO';
const CHANGE_AUTH_VALUE = 'CHANGE AUTH VALUE';

/* Action creators */

export const changeValueIsFetchingAuth = value => ({type: CHANGE_VALUE_IS_FETCHING_AUTH, value});
export const changeAuthUserInfo = (id, avatar, name, status, email) => ({type: CHANGE_AUTH_USER_INFO, info: {id, avatar, name, status, email}});
export const changeAuthValue = value => ({type: CHANGE_AUTH_VALUE, value});

/* Initial state */

const initialState = {
    isAuth: false,
    isFetchingAuth: false,
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
        case CHANGE_AUTH_VALUE:{
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

export const auth = () => {
    return dispatch => {
        dispatch(changeValueIsFetchingAuth(true));

        authAPI.me().then(data => {
            const {
                id,
                login,
                email
            } = data.data;

            if (data.messages.length === 0) {
                profileAPI.getStatus(id).then(status => {
                    profileAPI.getProfile(id).then(profileInfo => {
                        const avatarUser = profileInfo.photos.large;

                        dispatch(changeValueIsFetchingAuth(false));
                        dispatch(changeAuthValue(true));
                        dispatch(changeAuthUserInfo(id, avatarUser, login, status, email));
                    });
                });
            } else {
                dispatch(changeValueIsFetchingAuth(false));
                dispatch(changeAuthValue(false));
            }
        })
    }
};

export const login = (email, password, rememberMe, captcha = true) => {
    return dispatch => authAPI.login(email, password, rememberMe, captcha).then(data => dispatch(auth()));
};

export const logout = () => {
    return dispatch => authAPI.logout().then(data => dispatch(auth()));
};