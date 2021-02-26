/* Modules */

import React from 'react';
import styles from './login.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/required";
import {Input} from "../../../utils/form-controls/form-controls";

/* Login form component */

const LoginForm = reduxForm({form: 'login-form'})(props => {
    return (
        <div className={styles['login-form-wrapper']}>
            <form onSubmit={props.handleSubmit} className={styles['login-form']}>
                <h1 className={styles['login-title']}>Войти в аккаунт</h1>
                <div className={styles['input-wrapper']}>
                    <Field
                        type='email'
                        name='email'
                        autoComplete='off'
                        placeholder='Почта...'
                        component={Input}
                        className={styles['login-input']}
                        validate={[required]}
                    />
                </div>
                <div className={styles['input-wrapper']}>
                    <Field
                        type='password'
                        name='password'
                        autoComplete='off'
                        placeholder='Пароль...'
                        component={Input}
                        className={styles['login-input']}
                        validate={[required]}
                    />
                </div>
                <div className={styles['checkbox-wrapper']}>
                    <Field
                        id='remember-me'
                        type='checkbox'
                        name='remember-me'
                        component={'input'}
                        className={styles['login-checkbox']}
                    />
                    <label htmlFor="remember-me" className={styles['login-checkbox-label']}>Запомнить меня</label>
                </div>
                <button className={styles['login-form-btn']}>Войти</button>
            </form>
        </div>
    );
});

/* Component */

const Login = props => {
    return (
        <div className={styles['login']}>
            <LoginForm onSubmit={props.onSubmitLoginForm}/>
        </div>
    )
};

/* Export of component */

export default Login;