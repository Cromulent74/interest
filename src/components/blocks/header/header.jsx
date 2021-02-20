/* Modules */

import React from 'react';
import styles from './header.module.css';
import {Field, reduxForm} from "redux-form";

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
            </div>
        </header>
    );
};

/* Export of component */

export default Header;