/* Modules */

import {
    changeFetchingProfile,
    follow,
    profileReducer,
    setProfile,
    setStatus, unFollow
} from "../../../redux/reducers/profileReducer";

/* Test state */

const state = {
    id: null,
    avatar: null,
    name: null,
    status: null,
    follow: false,
    isFetchingProfile: true
};

/* Tests */

test(`testing of profile reducer on setting profile`, () => {
    /* Test data */

    const action = setProfile(1, undefined, 'some people', 'status', false);

    /* Action */

    const newState = profileReducer(state, action);

    /* Expection */

    expect(newState.id).toBe(1);
    expect(newState.avatar).toBe(undefined);
    expect(newState.name).toBe('some people');
    expect(newState.status).toBe('status');
    expect(newState.follow).toBe(false);
});

test('testing of changing of fetching on profile', () => {
    /* Test data */

    const action = changeFetchingProfile(false);

    /* Action */

    const newState = profileReducer(state, action);

    /* Expection */

    expect(newState.isFetchingProfile).toBe(false);
});

test('testing of setting status', () => {
    /* Test data */

    const action = setStatus('status');

    /* Action */

    const newState = profileReducer(state, action);

    /* Expection */

    expect(newState.status).toBe('status');
});

test('testing of following to user', () => {
    /* Test data */

    const action = follow();

    /* Action */

    const newState = profileReducer(state, action);

    /* Expection */

    expect(newState.follow).toBe(true);
});

test('testing of un following from user', () => {
    /* Test data */

    const action = unFollow();

    /* Action */

    const newState = profileReducer(state, action);

    /* Expection */

    expect(newState.follow).toBe(false);
});