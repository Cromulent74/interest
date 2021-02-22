/* Modules */

import React, {useEffect} from "react";
import {compose} from "redux";
import AppContent from "./app-content";
import {connect} from "react-redux";
import {auth} from "./redux/reducers/authReducer";

/* Render component */

const AppStructure = props => {
    /* Hooks */

    useEffect(() => props.auth(), []);

    /* Render of component */

    return (
        <AppContent/>
    )
};

/* Export component */

export default compose(
    connect(null, {
        auth
    })
)(AppStructure);