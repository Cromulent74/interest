/* Modules */

import React from 'react';
import styles from './preloader.module.css';

/* Component */

export const PreloaderUI = React.memo(props => {
    return (
        <div className={styles['preloader-wrapper']}>
            <div className={styles['preloader']}/>
        </div>
    )
});