/* Modules */

import {
    changeFetchingFriends,
    changeFetchingUsers,
    setFriends, setMaxCountFriends, setMaxCountUsers,
    setUsers,
    usersReducer
} from "../../../redux/reducers/users-reducer";

/* Initial state */

const state = {
    isFetchingUsers: true,
    isFetchingFriends: true,
    users: [],
    friends: [],
    maxCountFriends: null,
    maxCountUsers: null,
};

/* Test */

test('testing of setting users', () => {
    /* Test data */

    const action = setUsers(['user1', 'user2', 'user3']);

    /* Action */

    const newState = usersReducer(state, action);

    /* Expection */

    expect(newState.users).toEqual(['user1', 'user2', 'user3']);
});

test('testing of setting friends', () => {
    /* Test data */

    const action = setFriends(['friend1', 'friend2', 'friend3']);

    /* Action */

    const newState = usersReducer(state, action);

    /* Expection */

    expect(newState.friends).toEqual(['friend1', 'friend2', 'friend3']);
});

test('testing of changing users fetching value', () => {
    /* Test data */

    const action = changeFetchingUsers(false);

    /* Action */

    const newState = usersReducer(state, action);

    /* Expection */

    expect(newState.isFetchingUsers).toBe(false);
});

test('testing of changing friends fetching value', () => {
    /* Test data */

    const action = changeFetchingFriends(false);

    /* Action */

    const newState = usersReducer(state, action);

    /* Expection */

    expect(newState.isFetchingFriends).toBe(false);
});

test('testing of setting max count friends', () => {
    /* Test data */

    const action = setMaxCountFriends(20);

    /* Action */

    const newState = usersReducer(state, action);

    /* Expection */

    expect(newState.maxCountFriends).toBe(20);
});

test('testing of setting max count users', () => {
    /* Test data */

    const action = setMaxCountUsers(20);

    /* Action */

    const newState = usersReducer(state, action);

    /* Expection */

    expect(newState.maxCountUsers).toBe(20);
});