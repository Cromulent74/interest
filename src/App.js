/* Modules */

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppStructure from "./app-structure";
import './assets/css/fonts.min.css';
import './assets/css/reset.min.css';
import './assets/css/styles.min.css';

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
