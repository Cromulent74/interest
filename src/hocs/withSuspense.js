/* Modules */

import React from 'react';
import {PreloaderUI} from "../components/elements/preloader/preloader-ui";

/* High order component */

export const withSuspense = (Component) => {
    /* Container component */

    const Suspense = props => (
        <React.Suspense fallback={
            <PreloaderUI/>
        }>
            <Component
                {...props}
            />
        </React.Suspense>
    );

    /* Return container component */

    return <Suspense/>;
};