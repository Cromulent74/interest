/* Modules */

import React from 'react';
import styles from './preloader.module.css';

/* Component */

export const Preloader = React.memo(props => {
    /* UI element */

    const PreloaderUI = React.memo(props => {
        return (
            <div className={styles['preloader-wrapper']}>
                <div className={styles['preloader']}/>
            </div>
        )
    });

    /* Render elements */

    if (props.value)
        return <PreloaderUI/>;
    else
        return props.elements;
});