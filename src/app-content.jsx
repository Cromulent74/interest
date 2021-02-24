/* Modules */

import React from 'react';
import styles from './app.module.css';
import HeaderContainer from "./components/blocks/header/header-container";
import SidebarContainer from "./components/elements/sidebar/sidebar-container";

/* Render of component */

const AppContent = props => {
    return (
        <>
            <HeaderContainer/>
            <main className={styles['main']}>
                <div className={`container ${styles['main-container']}`}>
                    <SidebarContainer/>
                </div>
            </main>
        </>
    )
};

/* Export of component */

export default AppContent;