/* Action types */

import {profileAPI, usersAPI} from "../../api/api";

const SET_USERS = 'SET USERS';
const SET_FRIENDS = 'SET FRIENDS';
const CHANGE_FETCHING_FRIENDS = 'CHANGE FETCHING FRIENDS';
const CHANGE_FETCHING_USERS = 'CHANGE FETCHING USERS';
const SET_MAX_COUNT_FRIENDS = 'SET MAX COUNT FRIENDS';
const SET_MAX_COUNT_USERS = 'SET MAX COUNT USERS';

/* Action creators */

export const setUsers = (users) => ({type: SET_USERS, users});
export const setFriends = friends => ({type: SET_FRIENDS, friends});
export const changeFetchingFriends = value => ({type: CHANGE_FETCHING_FRIENDS, value});
export const changeFetchingUsers = value => ({type: CHANGE_FETCHING_USERS, value});
export const setMaxCountFriends = value => ({type: SET_MAX_COUNT_FRIENDS, value});
export const setMaxCountUsers = value => ({type: SET_MAX_COUNT_USERS, value});

/* Initial state */

const initialState = {
    isFetchingUsers: true,
    isFetchingFriends: true,
    users: [],
    friends: [],
    maxCountFriends: null,
    maxCountUsers: null,
};

/* Reducer */

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: [...action.friends]
            }
        }
        case CHANGE_FETCHING_USERS: {
            return {
                ...state,
                isFetchingUsers: action.value
            }
        }
        case CHANGE_FETCHING_FRIENDS: {
            return {
                ...state,
                isFetchingFriends: action.value
            }
        }
        case SET_MAX_COUNT_FRIENDS: {
            return {
                ...state,
                maxCountFriends: action.value
            }
        }
        case SET_MAX_COUNT_USERS: {
            return {
                ...state,
                maxCountUsers: action.value
            }
        }
        default:
            return state;
    }
};

/* Thunk creators */

export const getUsers = (page, pageSize, term) => dispatch => {
    dispatch(changeFetchingUsers(true));

    usersAPI.getUsers(page, pageSize, term).then(response => {
        dispatch(changeFetchingUsers(false));

        if (response.error === null) {
            dispatch(setUsers(response.items));
            dispatch(setMaxCountUsers(response.totalCount));
        }
    });
};

export const getFriends = (page, pageSize, term) => dispatch => {
    dispatch(changeFetchingFriends(true));

    usersAPI.getFriends(page, pageSize, term).then(response => {
        dispatch(changeFetchingFriends(false));

        if (response.error === null) {
            dispatch(setFriends(response.items));
            dispatch(setMaxCountFriends(response.totalCount));
        }
    });
};

export const follow = (id) => dispatch => {
    dispatch(changeFetchingUsers(true));

    return profileAPI.follow(id).then(() => dispatch(changeFetchingUsers(false)));
};

export const unFollow = (id) => dispatch => {
    dispatch(changeFetchingFriends(true));

    return profileAPI.unFollow(id).then(() => dispatch(changeFetchingFriends(false)));
};