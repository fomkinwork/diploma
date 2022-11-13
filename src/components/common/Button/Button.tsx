import React, {FC, MouseEventHandler} from 'react';

import {WithChildren} from "../../../types/withChildren";

// @ts-ignore
import styles from "./Button.module.css";

export enum ButtonVariantProps {
    primary = "primary",
    secondary = "secondary"
}

type ButtonTypeProps = "button" | "submit" | "reset"

interface ButtonProps {
    type?: ButtonTypeProps
    className?: string
    variant?: ButtonVariantProps
    onClick?: MouseEventHandler
}

const Button: FC<ButtonProps & WithChildren> = (
    {
        variant = ButtonVariantProps.primary,
        className = "",
        type= "button",
        children,
        onClick= () => {}
    }) => {

    return (
        <button
            onClick={onClick}
            className={`
                ${styles.btn} 
                ${variant === ButtonVariantProps.primary ? styles.primary : styles.secondary} 
                ${className}
            `}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;