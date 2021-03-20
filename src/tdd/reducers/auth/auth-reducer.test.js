/* Modules */

import {
    authReducer,
    changeAuthUserInfo,
    changeAuthValue,
    changeValueIsFetchingAuth
} from "../../../redux/reducers/authReducer";

/* Initial state */

const state = {
    isAuth: false,
    isFetchingAuth: true,
    id: null,
    avatar: null,
    name: null,
    status: null,
    email: null
};

/* Test */

test('testing of changing auth of fetching value', () => {
    /* Test data */

    const action = changeValueIsFetchingAuth(false);

    /* Action */

    const newState = authReducer(state, action);

    /* Expection */

    expect(newState.isFetchingAuth).toBe(false);
});

test('testing of changing current auth value', () => {
    /* Test data */

    const action = changeAuthValue(true);

    /* Action */

    const newState = authReducer(state, action);

    /* Expection */

    expect(newState.isAuth).toBe(true);
});

test('testing of changing info about auth user', () => {
    /* Test info */

    const action = changeAuthUserInfo(1, undefined, 'name', 'status', 'email');

    /* Action */

    const newState = authReducer(state, action);

    /* Expection */

    expect(newState.id).toBe(1);
    expect(newState.avatar).toBe(undefined);
    expect(newState.name).toBe('name');
    expect(newState.status).toBe('status');
    expect(newState.email).toBe('email');
});