/* Modules */

import React, {useEffect} from "react";
import styles from './app.module.css';
import {compose} from "redux";
import AppContent from "./app-content";
import {connect} from "react-redux";
import {initializeApp, initializedApp, initializeProcesses} from "./redux/reducers/appReducer";
import {getCurrentFetchingAuth, getCurrentInitializedApp} from "./redux/selectors/selectors";
import {Preloader} from "./components/elements/preloader/preloader";

/* Render component */

const AppStructure = props => {
    /* Effects */

    useEffect(() => {
        props.initializeProcesses();
    }, []);

    useEffect(() => {
        props.initializeApp([props.isFetchingAuth]);
    }, [props.isFetchingAuth]);

    /* Render of component */

    if (props.initialized)
        return (
            <div className={styles['preloader-wrapper']}>
                <Preloader
                    value={props.initialized}
                    elements={<AppContent/>}
                />
            </div>
        );
    else
        return (
            <Preloader
                value={props.initialized}
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
        initializeProcesses
    })
)(AppStructure);