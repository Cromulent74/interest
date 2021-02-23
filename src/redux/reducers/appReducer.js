/* Modules */

import {auth} from "./authReducer";

/* Action types */

const END_INITIALIZE_APP = 'END INITIALIZE APP';

/* Action creators */

export const endInitializeApp = () => ({type: END_INITIALIZE_APP});

/* Initial state */

const initialState = {
    initialized: false
};

/* Reducer */

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case END_INITIALIZE_APP: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

/* Thunk creator */

export const initializeApp = () => dispatch => dispatch(auth()).then(() => dispatch(endInitializeApp()));