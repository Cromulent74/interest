/* Modules */

import {profileAPI} from "../../api/api";

/* Action types */

const SET_PROFILE = 'profile-reducer/SET-PROFILE';
const CHANGE_FETCHING_PROFILE = 'profile-reducer/CHANGE-FETCHING-OF-PROFILE';
const SET_STATUS = 'profile-reducer/SET-STATUS';
const FOLLOW = 'profile-reducer/FOLLOW';
const UN_FOLLOW = 'profile-reducer/UN-FOLLOW';

/* Action creators */

export const setProfile = (id, avatar, name, status, follow) => ({
    type: SET_PROFILE,
    info: {id, avatar, name, status, follow}
});
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

/* Templates */

const toggleFollowTemplate = async (apiMethod, actionCreator, dispatch, id) => {
    dispatch(changeFetchingProfile(true));

    await apiMethod(id);

    dispatch(actionCreator());
    dispatch(changeFetchingProfile(false));
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

export const getProfile = (id) => async dispatch => {
    dispatch(changeFetchingProfile(true));

    const status = await profileAPI.getStatus(id);
    const data = await profileAPI.getProfile(id);
    const check = await profileAPI.checkOnFollow(id);

    dispatch(changeFetchingProfile(false));
    dispatch(setProfile(id, data.photos.large, data.fullName, status, check))
};

export const saveStatus = (statusInput, changeEditMode) => async dispatch => {
    dispatch(changeFetchingProfile(true));

    const response = await profileAPI.setStatus(statusInput, changeEditMode);

    if (Number(response.resultCode) === 0) {
        dispatch(setStatus(statusInput));
        dispatch(changeFetchingProfile(false));
        changeEditMode(false);
    }

    return response;
};

export const followToUser = (id) => async dispatch => await toggleFollowTemplate(profileAPI.follow.bind(profileAPI), follow, dispatch, id);

export const unFollowToUser = (id) => async dispatch => await toggleFollowTemplate(profileAPI.unFollow.bind(profileAPI), unFollow, dispatch, id);