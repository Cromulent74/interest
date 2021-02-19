/* Modules */

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppStructure from "./app-structure";

/* Render of component */

export const App = props => {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
                <AppStructure/>
            </Provider>
        </BrowserRouter>
    )
};
