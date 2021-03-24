/* Modules */

import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Profile from "./profile";
import {
    getAvatarAU, getCurrentFetchingProfile, getCurrentFollowUser, getCurrentInitializedApp,
    getIdAU,
    getNameAU,
    getStatusAU,
    getUserAvatar,
    getUserId,
    getUserName,
    getUserStatus
} from "../../../redux/selectors/selectors";
import {followToUser, loadProfile, saveStatus, unFollowToUser} from "../../../redux/reducers/profileReducer";
import {Preloader} from "../../elements/preloader/preloader";

/* Component */

const ProfileContainer = React.memo(props => {
    /* Local State */

    const [statusInput, changeStatusInput] = useState(props.userStatus);
    const [editMode, changeEditMode] = useState(false);

    /* Variables */

    const userId = props.match.params.userId;

    /* Effects */

    useEffect(() => {
        if (!props.initialized)
            props.loadProfile(userId, props.myId, props.myAvatar, props.myName, props.myStatus);
    }, [userId, props.initialized]);

    useEffect(() => {
        changeStatusInput(props.userStatus);
    }, [props.userStatus]);

    /* Event handlers */

    const saveStatus = e => {
        e.preventDefault();

        props.saveStatus(statusInput, changeEditMode);
    };

    const openEditModeStatus = value => {
        if (Number(userId) === Number(props.myId))
            changeEditMode(value);
    };

    const closeStatus = e => {
        e.preventDefault();

        changeEditMode(false);
    };

    /* Render of component */

    return (
        <Preloader
            value={props.isFetchingProfile}
            elements={
                <Profile
                    {...props}
                    editMode={editMode}
                    statusInput={statusInput}
                    changeStatusInput={value => changeStatusInput(value)}
                    closeStatus={e => closeStatus(e)}
                    saveStatus={e => saveStatus(e)}
                    openEditModeStatus={value => openEditModeStatus(value)}
                />
            }
        />
    )
});

/* Creating state for props */

const mapStateToProps = state => ({
    myId: getIdAU(state),
    myName: getNameAU(state),
    myAvatar: getAvatarAU(state),
    myStatus: getStatusAU(state),
    userId: getUserId(state),
    userAvatar: getUserAvatar(state),
    userName: getUserName(state),
    userStatus: getUserStatus(state),
    userIsFollowing: getCurrentFollowUser(state),
    isFetchingProfile: getCurrentFetchingProfile(state),
    initialized: getCurrentInitializedApp(state)
});

/* Export of component */

export default compose(
    connect(mapStateToProps, {
        loadProfile,
        saveStatus,
        followToUser,
        unFollowToUser
    }),
    withRouter
)(ProfileContainer);