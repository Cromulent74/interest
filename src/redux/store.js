/* Modules */

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {headerReducer} from "./reducers/header-reducer";
import {reducer as formReducer} from 'redux-form';

/* Creating store */

export const store = createStore(combineReducers({
    header: headerReducer,
    // auth: authReducer,
    form: formReducer
}), applyMiddleware(thunk));