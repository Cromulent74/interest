/* Modules */

import {profileAPI} from "../../api/api";

/* Action types */

const SET_PROFILE = 'SET PROFILE';
const CHANGE_FETCHING_PROFILE = 'CHANGE FETCHING OF PROFILE';
const SET_STATUS = 'SET STATUS';
const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN FOLLOW';

/* Action creators */

export const setProfile = (id, avatar, name, status, follow) => ({type: SET_PROFILE, info: {id, avatar, name, status, follow}});
export const changeFetchingProfile = value => ({type: CHANGE_FETCHING_PROFILE, value});
export const setStatus = status => ({type: SET_STATUS, status});
export const follow = () => ({type: FOLLOW});
export const unFollow = () => ({type: UN_FOLLOW});

/* Initial state */

const initialState = {
    id: null,
    avatar: null,
    name: null,
    status: null,
    follow: false,
    isFetchingProfile: true
};

/* Reducer */

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                ...action.info
            };
        }
        case CHANGE_FETCHING_PROFILE: {
            return {
                ...state,
                isFetchingProfile: action.value
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case FOLLOW: {
            return {
                ...state,
                follow: true
            }
        }
        case UN_FOLLOW: {
            return {
                ...state,
                follow: false
            }
        }
        default:
            return state;
    }
};

/* Thunk creators */

export const loadProfile = (userId, myId, myAvatar, myName, myStatus) => dispatch => {
    if (Number(userId) === Number(myId)) {
        dispatch(changeFetchingProfile(true));
        dispatch(setProfile(myId, myAvatar, myName, myStatus));
        dispatch(changeFetchingProfile(false));
    } else
        dispatch(getProfile(userId));
};

export const getProfile = (id) => dispatch => {
    dispatch(changeFetchingProfile(true));

    profileAPI.getStatus(id).then(status => profileAPI.getProfile(id).then(data => profileAPI.checkOnFollow(id).then(check => {
        dispatch(changeFetchingProfile(false));
        dispatch(setProfile(id, data.photos.large, data.fullName, status, check))
    })))
};

export const saveStatus = (statusInput, changeEditMode) => dispatch => {
    dispatch(changeFetchingProfile(true));

    return profileAPI.setStatus(statusInput, changeEditMode).then(response => {
        if (Number(response.resultCode) === 0) {
            dispatch(setStatus(statusInput));
            dispatch(changeFetchingProfile(false));
            changeEditMode(false);
        }
    });
};

export const followToUser = (id) => dispatch => {
    dispatch(changeFetchingProfile(true));

    profileAPI.follow(id).then(() => {
        dispatch(follow());
        dispatch(changeFetchingProfile(false));
    });
};

export const unFollowToUser = (id) => dispatch => {
    dispatch(changeFetchingProfile(true));

    profileAPI.unFollow(id).then(() => {
        dispatch(unFollow());
        dispatch(changeFetchingProfile(false));
    });
};