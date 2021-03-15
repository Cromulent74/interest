/* Modules */

import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./login";
import {login} from "../../../redux/reducers/authReducer";
import {getCurrentAuth, getCurrentFetchingAuth} from "../../../redux/selectors/selectors";
import {Preloader} from "../../elements/preloader/preloader";

/* Component */

const LoginContainer = React.memo(props => {
    /* Event handlers */

    const onSubmitLoginForm = formData => {
        props.login(formData.email ? formData.email : '', formData.password ? formData.password : '', formData.rememberMe ? formData.rememberMe : false, true);
    };

    /* Render of component */

    return (
        <Preloader
            value={props.isFetchingAuth}
            elements={
                <Login
                    {...props}
                    onSubmitLoginForm={onSubmitLoginForm}
                />
            }
        />
    )
});

/* Creating state for props */

const mapStateToProps = state => ({
    isAuth: getCurrentAuth(state),
    isFetchingAuth: getCurrentFetchingAuth(state)
});

/* Export of component */

export default compose(
    connect(mapStateToProps, {
        login
    })
)(LoginContainer);