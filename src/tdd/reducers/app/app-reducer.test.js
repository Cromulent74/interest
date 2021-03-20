/* Modules */

import {appReducer, initializedApp} from "../../../redux/reducers/appReducer";

/* Initial state */

const state = {
    initialized: true
};

/* Test */

test('testing of initializing application', () => {
    /* Test data */

    const action = initializedApp(false);

    /* Action */

    const newState = appReducer(state, action);

    /* Expection */

    expect(newState.initialized).toBe(false);
});