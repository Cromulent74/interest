/* Modules */

import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./login";
import {login} from "../../../redux/reducers/authReducer";

/* Component */

const LoginContainer = props => {
    const onSubmitLoginForm = formData => {
        props.login(formData.email ? formData.email : '', formData.password ? formData.password : '', formData.rememberMe ? formData.rememberMe : false, true);
    };

    return (
        <Login
            {...props}
            onSubmitLoginForm={onSubmitLoginForm}
        />
    )
};

/* Export of component */

export default compose(
    connect(null, {
        login
    })
)(LoginContainer);