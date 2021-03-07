/* Modules */

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {headerReducer} from "./reducers/header-reducer";
import {reducer as formReducer} from 'redux-form';
import {authReducer} from "./reducers/authReducer";
import {appReducer} from "./reducers/appReducer";
import {profileReducer} from "./reducers/profileReducer";

/* Creating store */

export const store = createStore(combineReducers({
    header: headerReducer,
    profile: profileReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
}), applyMiddleware(thunk));