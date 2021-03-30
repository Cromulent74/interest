/* Modules */

import React from 'react';
import { PreloaderUI } from "./preloader-ui";

/* Component */

export const Preloader = React.memo(props => {
    /* Render elements */

    if (props.value)
        return <PreloaderUI/>;
    else
        return props.elements;
});