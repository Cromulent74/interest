/* Modules */

import React, {useEffect} from "react";
import styles from './app.module.css';
import {compose} from "redux";
import AppContent from "./app-content";
import {connect} from "react-redux";
import {initializeApp, initializedApp} from "./redux/reducers/appReducer";
import {getCurrentFetchingAuth, getCurrentInitializedApp} from "./redux/selectors/selectors";
import {Preloader} from "./components/elements/preloader/preloader";

/* Render component */

const AppStructure = props => {
    /* Hooks */

    useEffect(() => {
        props.initializeApp();
    }, []);

    useEffect(() => {
        props.initializedApp(!props.isFetchingAuth);
    }, [props.isFetchingAuth]);

    const init = !props.initialized;

    /* Render of component */

    if (init)
        return (
            <div className={styles['preloader-wrapper']}>
                <Preloader
                    value={init}
                    elements={<AppContent/>}
                />
            </div>
        );
    else
        return (
            <Preloader
                value={init}
                elements={<AppContent/>}
            />
        );
};

/* Creating state to props */

const mapStateToProps = state => ({
    initialized: getCurrentInitializedApp(state),
    isFetchingAuth: getCurrentFetchingAuth(state)
});

/* Export component */

export default compose(
    connect(mapStateToProps, {
        initializeApp,
        initializedApp
    })
)(AppStructure);