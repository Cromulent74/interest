/* Modules */

import React from 'react';
import styles from './app.module.css';
import HeaderContainer from "./components/blocks/header/header-container";
import SidebarContainer from "./components/elements/sidebar/sidebar-container";
import {Route} from "react-router";
import ProfileContainer from "./components/pages/profile/profile-container";
import {withSuspense} from "./hocs/withSuspense";

/* React lazy imports */

const LoginContainer = React.lazy(() => import('./components/pages/login/login-container'));
const UsersContainer = React.lazy(() => import('./components/pages/users/users-container'));

/* Render of component */

const AppContent = props => (
    <>
        <HeaderContainer/>
        <main className={styles['main']}>
            <div className={`container ${styles['main-container']}`}>
                <SidebarContainer/>
                <Route path={`/profile/:userId`} render={() => <ProfileContainer/>}/>
                <Route path={`/login`} render={() => withSuspense(LoginContainer)}/>
                <Route path={`/users`} render={() => withSuspense(UsersContainer)}/>
            </div>
        </main>
    </>
);

/* Export of component */

export default AppContent;