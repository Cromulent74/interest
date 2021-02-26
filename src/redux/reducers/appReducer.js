/* Modules */

import {auth} from "./authReducer";

/* Action types */

const INITIALIZE_APP = 'END INITIALIZE APP';

/* Action creators */

export const initializedApp = value => ({type: INITIALIZE_APP, value});

/* Initial state */

const initialState = {
    initialized: false,
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

export const initializeApp = () => dispatch => {
    dispatch(initializedApp(false));

    dispatch(auth()).then(() => dispatch(initializedApp(true)));
};