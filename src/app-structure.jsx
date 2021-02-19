/* Modules */

import React from "react";
import {compose} from "redux";
import AppContent from "./app-content";
import {connect} from "react-redux";

/* Render component */

const AppStructure = props => {
    return (
        <AppContent/>
    )
};

/* Export component */

export default compose(
    connect()
)(AppStructure);