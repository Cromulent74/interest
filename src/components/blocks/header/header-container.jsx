/* Modules */

import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./header";
import {getStatusOfNotifications} from "../../../redux/selectors/selectors";

/* Container component */

const HeaderContainer = props => {
    /* Event handlers */

    const onSearchSubmit = formData => {
        console.log(formData);
    };

    /* Render component */

    return (
        <Header
            notifications={props.notifications}
            onSearchSubmit={onSearchSubmit}
        />
    );
};

/* Creating state for props */

const mapStateToProps = state => ({
    notifications: getStatusOfNotifications(state)
});

/* Export of component */

export default compose(
    connect(mapStateToProps, {

    })
)(HeaderContainer);