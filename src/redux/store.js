/* Modules */

import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

/* Creating store */

export const store = createStore(combineReducers({

}), applyMiddleware(thunk));