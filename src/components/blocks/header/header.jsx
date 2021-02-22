/* Modules */

import React from 'react';
import styles from './header.module.css';
import {Field, reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";

/* Component */

const Header = props => {
    /* UI elements */

    const SearchForm = reduxForm({form: 'header-search-form'})(props => (
        <form onSubmit={props.handleSubmit} action="" className={styles['header-search-form']}>
            <Field className={styles['search-input']} name={`search-input`} component={`input`} placeholder={`Search`}/>
        </form>
    ));

    /* Render component */

    return (
        <header className={styles.header}>
            <div className={`container ${styles['header-container']}`}>
                <SearchForm onSubmit={props.onSearchSubmit}/>
                <nav className={styles['navigation']}>
                    {props.isAuth ? (
                        <>
                            <NavLink to={`/profile/${props.idAU}`} className={`${styles['nav-link']} ${styles['user-nav-link']}`}>
                                <img src={props.avatarAU} alt="" className={styles['user-avatar']}/>
                                <p className={styles['user-name']}>{props.nameAU}</p>
                            </NavLink>
                            <NavLink to={`/news-feed`} className={`${styles['nav-link']}`}>Домой</NavLink>
                            <div className={styles['nav-bar']}>
                                <NavLink to={`/users`} className={`${styles['nav-bar-users']}`}/>
                                <NavLink to={`/messages`} className={`${styles['nav-bar-messages']}`}/>
                                <NavLink to={`/notifications`} className={`${styles['nav-bar-notifications']} ${props.notifications && styles['nav-bar-notifications-active']}`}/>
                            </div>
                            <button onClick={() => props.logout()} className={styles['logout-btn']}>Выйти</button>
                        </>
                    ) : (
                        <NavLink to={`/login`} className={styles['to-login']}>Войти</NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
};

/* Export of component */

export default Header;