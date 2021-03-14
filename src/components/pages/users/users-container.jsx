/* Modules */

import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Users from "./users";
import {withRedirectSecurity} from "../../../hocs/withRedirectSecurity";
import {follow, getFriends, getUsers, unFollow} from "../../../redux/reducers/users-reducer";
import {
    getArrayFriends,
    getArrayUsers,
    getCurrentFetchingFriends,
    getCurrentFetchingUsers, getMaxCountFriends, getMaxCountUsers
} from "../../../redux/selectors/selectors";

/* Component */

const UsersContainer = props => {
    /* State */

    const [pageFriends, changePageFriends] = useState(1);
    const [pageUsers, changePageUsers] = useState(1);
    const [pageSize, changePageSize] = useState(5);

    /* Effects */

    useEffect(() => {
        props.getUsers(pageUsers, pageSize);
        props.getFriends(pageFriends, pageSize);
    }, []);

    /* Event handlers */

    const onPageNextUsers = () => {
        changePageUsers(pageUsers + 1);
        props.getUsers(pageUsers + 1, pageSize);
    };
    const onPagePrevUsers = () => {
        changePageUsers(pageUsers - 1);
        props.getUsers(pageUsers - 1, pageSize);
    };
    const onPageNextFriends = () => {
        changePageFriends(pageFriends + 1);
        props.getFriends(pageFriends + 1, pageSize);
    };
    const onPagePrevFriends = () => {
        changePageFriends(pageFriends - 1);
        props.getFriends(pageFriends - 1, pageSize);
    };
    const onFollow = (id) => {
        props.follow(id).then(() => {
            props.getFriends(pageFriends, pageSize);
            props.getUsers(pageUsers, pageSize);
        });
    };
    const onUnFollow = (id) => {
        props.unFollow(id).then(() => {
            props.getFriends(pageFriends, pageSize);
            props.getUsers(pageUsers, pageSize);
        });
    };

    /* Render of component */

    return (
        <Users
            {...props}
            onFollow={onFollow}
            onUnFollow={onUnFollow}
            pageFriends={pageFriends}
            pageUsers={pageUsers}
            pageSize={pageSize}
            onPageNextUsers={onPageNextUsers}
            onPagePrevUsers={onPagePrevUsers}
            onPageNextFriends={onPageNextFriends}
            onPagePrevFriends={onPagePrevFriends}
        />
    )
};

/* Creating state for props */

const mapStateToProps = state => ({
    isFetchingFriends: getCurrentFetchingFriends(state),
    isFetchingUsers: getCurrentFetchingUsers(state),
    users: getArrayUsers(state),
    friends: getArrayFriends(state),
    maxCountFriends: getMaxCountFriends(state),
    maxCountUsers: getMaxCountUsers(state)
});

/* Export of component */

export default compose(
    connect(mapStateToProps, {
        getUsers,
        getFriends,
        follow,
        unFollow
    }),
    withRedirectSecurity
)(UsersContainer);