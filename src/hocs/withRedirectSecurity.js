/* Modules */

import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {getCurrentAuth} from "../redux/selectors/selectors";
import {Redirect} from "react-router";

/* High order component */

export const withRedirectSecurity = (Component) => {
    /* Container component */

    const ComponentContainer = ({isAuth, ...props}) => {

        if (isAuth)
            return <Component {...props}/>;
        else
            return <Redirect to={`/login`}/>;
    };

    /* Creating state for props */

    const mapStateToProps = state => ({
        isAuth: getCurrentAuth(state)
    });

    /* Render of component */

    return compose(
        connect(mapStateToProps, null)
    )(ComponentContainer);
};