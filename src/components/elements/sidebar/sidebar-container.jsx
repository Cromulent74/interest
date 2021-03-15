/* Modules */

import React from 'react';
import Sidebar from "./sidebar";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAvatarAU, getCurrentAuth, getIdAU, getNameAU} from "../../../redux/selectors/selectors";

/* Component */

const SidebarContainer = React.memo(props => {
    /* Render of component */

    return (
        <Sidebar
            {...props}
        />
    );
});

/* Creating state to props */

const mapStateToProps = state => ({
    isAuth: getCurrentAuth(state),
    avatar: getAvatarAU(state),
    name: getNameAU(state),
    idAU: getIdAU(state),
    idP: 12
});

/* Exporting of component */

export default compose(
    connect(mapStateToProps, null)
)(SidebarContainer);