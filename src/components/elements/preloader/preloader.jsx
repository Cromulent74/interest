/* Modules */

import React from 'react';
import styles from './preloader.module.css';

/* Component */

export const Preloader = props => {
    /* UI element */

    const PreloaderUI = props => {
        return (
            <div className={styles['preloader-wrapper']}>
                <div className={styles['preloader']}/>
            </div>
        )
    };

    /* Render elements */

    if (props.value)
        return <PreloaderUI/>;
    else
        return props.elements;
};