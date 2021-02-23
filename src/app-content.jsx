/* Modules */

import React from 'react';
import styles from './app.module.css';
import HeaderContainer from "./components/blocks/header/header-container";

/* Render of component */

const AppContent = props => {
    return (
        <>
            <HeaderContainer/>
            <main className={styles['main']}>

            </main>
        </>
    )
};

/* Export of component */

export default AppContent;