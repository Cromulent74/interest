/* Action types */

import {profileAPI, usersAPI} from "../../api/api";

const SET_USERS = 'users-reducer/SET-USERS';
const SET_FRIENDS = 'users-reducer/SET-FRIENDS';
const CHANGE_FETCHING_FRIENDS = 'users-reducer/CHANGE-FETCHING-FRIENDS';
const CHANGE_FETCHING_USERS = 'users-reducer/CHANGE-FETCHING-USERS';
const SET_MAX_COUNT_FRIENDS = 'users-reducer/SET-MAX-COUNT-FRIENDS';
const SET_MAX_COUNT_USERS = 'users-reducer/SET-MAX-COUNT-USERS';

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

/* Templates */

const getDataTemplate = async (page, pageSize, term, apiMethod, setListAC, setMaxCountAC, changeFetchingAC, dispatch) => {
    dispatch(changeFetchingAC(true));

    const response = await apiMethod(page, pageSize, term);

    dispatch(changeFetchingAC(false));

    if (response.error === null) {
        dispatch(setListAC(response.items));
        dispatch(setMaxCountAC(response.totalCount));
    }
};

const toggleFollowTemplate = async (id,  actionCreator, apiMethod, dispatch) => {
    dispatch(actionCreator(true));

    const response = await apiMethod(id);
    dispatch(actionCreator(false));

    return response;
};

/* Thunk creators */

export const getUsers = (page, pageSize, term) =>
    async dispatch =>
        await getDataTemplate(
            page,
            pageSize,
            term,
            usersAPI.getUsers.bind(usersAPI),
            setUsers,
            setMaxCountUsers,
            changeFetchingUsers,
            dispatch
        );

export const getFriends = (page, pageSize, term) =>
    async dispatch =>
        await getDataTemplate(
            page,
            pageSize,
            term,
            usersAPI.getFriends.bind(usersAPI),
            setFriends,
            setMaxCountFriends,
            changeFetchingFriends,
            dispatch
        );

export const follow = (id) => async dispatch => await toggleFollowTemplate(id, changeFetchingUsers, profileAPI.follow.bind(profileAPI), dispatch);

export const unFollow = (id) => async dispatch => await toggleFollowTemplate(id, changeFetchingFriends, profileAPI.unFollow.bind(profileAPI), dispatch);