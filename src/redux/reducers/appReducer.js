/* Modules */

import {auth} from "./authReducer";

/* Action types */

const INITIALIZE_APP = 'END INITIALIZE APP';

/* Action creators */

export const initializedApp = value => ({type: INITIALIZE_APP, value});

/* Initial state */

const initialState = {
    initialized: true
};

/* Reducer */

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP: {
            return {
                ...state,
                initialized: action.value
            }
        }
        default:
            return state;
    }
};

/* Thunk creator */

export const initializeApp = (fetching) => dispatch => {
    let check = true;

    for (let i = 0; i < fetching.length; i++) {
        if (fetching[i] === true)
            check = false;
    }

    if (check)
        dispatch(initializedApp(false));
};

export const initializeProcesses = () => dispatch => {
    dispatch(auth());
};