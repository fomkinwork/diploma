import React, { FC } from 'react';

import styles from './Input.module.css'

import {InputProps} from '../../../types/formElements'

const Input: FC<InputProps>  = ({
                                    id= "",
                                    title = "",
                                    type = "text",
                                    value= "",
                                    onChange,
                                    name = "",
                                    disabled= false,
                                    placeholder = "",
                                    error= { text: null, error: false },
                                    className = "",
                                    onSelect,
                                    required
                                }) => {
    return (
        <div className={`${styles.inputWrapper} ${!!className ? className : ""}`}>
            <label className={styles.label} htmlFor={id}>
                {title}
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    onSelect={onSelect}
                    required={required}
                    placeholder={placeholder}
                    accept={"image/png, image/jpeg"}
                    className={`${styles.input} ${error?.error ? styles.error : ""} `}
                />
            </label>
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default Input;
