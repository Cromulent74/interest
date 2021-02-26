/* Modules */

import React from "react";
import styles from './form-controls.module.css'

/* Form controls */

export const Input = ({input, meta, ...props}) => {
    return (
        <input
            {...input}
            {...props}
            placeholder={!meta.error && !meta.touched || meta.error && !meta.touched || meta.active ? props.placeholder : meta.error}
            className={`${props.className} ${meta.error && meta.touched && !meta.active ? styles['input-error'] : ''}`}
        />
    )
};