/* Modules */

import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./header";
import {
    getAvatarAU,
    getCurrentAuth,
    getIdAU,
    getNameAU,
    getStatusOfNotifications
} from "../../../redux/selectors/selectors";
import {logout} from "../../../redux/reducers/authReducer";

/* Container component */

const HeaderContainer = React.memo(props => {
    /* Event handlers */

    const onSearchSubmit = formData => {
        console.log(formData);
    };

    /* Render component */

    return (
        <Header
            {...props}
            onSearchSubmit={onSearchSubmit}
        />
    );
});

/* Creating state for props */

const mapStateToProps = state => ({
    isAuth: getCurrentAuth(state),
    nameAU: getNameAU(state),
    avatarAU: getAvatarAU(state),
    idAU: getIdAU(state),
    notifications: getStatusOfNotifications(state)
});

/* Export of component */

export default compose(
    connect(mapStateToProps, {
        logout
    })
)(HeaderContainer);