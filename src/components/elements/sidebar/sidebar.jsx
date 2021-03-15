/* Modules */

import React from 'react';
import styles from './sidebar.module.css';
import {NavLink} from "react-router-dom";

/* Component */

const Sidebar = React.memo(props => {
    /* Render of component */

    return (
        <aside className={styles['sidebar']}>
            {props.isAuth ? (
                <NavLink to={`/profile/${props.idAU}`} className={`${styles['profile-link']}`}>
                    <img src={props.avatar} alt="" className={styles['profile-avatar']}/>
                    <p className={styles['profile-name']}>{props.name}</p>
                </NavLink>
            ) : (
                <div className={styles['profile-link']}>
                    <p className={styles['not-auth']}>Авторизуйтесь</p>
                </div>
            )}
            <NavLink to={`/news-feed`} className={`${styles['sidebar-link']} ${styles['sidebar-link_news-feed']}`} activeClassName={styles['sidebar-active']}>News feed</NavLink>
            <NavLink to={`/messages`} className={`${styles['sidebar-link']} ${styles['sidebar-link_messages']}`} activeClassName={styles['sidebar-active']}>Messages</NavLink>
            <NavLink to={`/users`} className={`${styles['sidebar-link']} ${styles['sidebar-link_users']}`} activeClassName={styles['sidebar-active']}>Users</NavLink>
        </aside>
    )
});

/* Exporting component */

export default Sidebar;