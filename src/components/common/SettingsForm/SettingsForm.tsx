import React, {FC} from 'react';

import styles from './SettingsForm.module.css'
import {InputProps} from "../../../types/formElements";
import {FormElementError} from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import Button, {ButtonVariantProps} from "../Button/Button";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import {ThemeVariant} from "../../../context/ThemeContext";

export interface ISettingsFormProps {
    actionButtonCancel: {
        title: string,
        onCancel: () => void
    }
    actionButtonSave: {
        title: string,
        onSubmit: () => {}
    }
    profileInputs?: InputProps[]
    passwordInputs?: InputProps[]
    topText?: string
    requestError?: FormElementError
    themeSwitcherOnClick?: any
    condition?: any
    theme?: string
}

const SettingsForm:FC<ISettingsFormProps> = ({profileInputs=[], passwordInputs=[], topText,
                                             requestError,actionButtonCancel,
                                             actionButtonSave,
                                             themeSwitcherOnClick, condition, theme}) => {
    return (
        <form className={styles.formWrapper}>
            <div className={styles.formBlock}>
                <p className={styles.topText}>Profile</p>
                    <div className={`${styles.contentBlock}
                     ${theme === ThemeVariant.light ? styles.contentBlockWhite : ""}`}>
                        {profileInputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
                    </div>
            </div>
            <div className={styles.formBlock}>
                <p className={styles.topText}>Password</p>
                    <div className={`${styles.contentBlock}
                    ${theme === ThemeVariant.light ? styles.contentBlockWhite : ""}`}>
                    {passwordInputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
                    </div>
            </div>
            <div className={styles.formBlock}>
                <p className={styles.topText}>Color mode</p>
                <div className={`${styles.contentBlockTheme}
                 ${theme === ThemeVariant.light ? styles.contentBlockWhite : ""}`}>
                    <div className={styles.textBlock}>
                        <span className={styles.themeTopText}>Dark</span>
                        <span className={styles.themeText}>Use dark theme</span>
                    </div>
                    <ThemeSwitcher onClick={themeSwitcherOnClick} condition={condition}/>
                </div>
            </div>
            <div className={styles.buttonsBlock}>
                <Button
                    variant={ButtonVariantProps.secondary}
                    onClick={actionButtonCancel.onCancel}
                    className={styles.submitButton}
                >
                    {actionButtonCancel.title}
                </Button>
                <Button
                    onClick={actionButtonSave.onSubmit}
                    className={styles.submitButton}
                >
                    {actionButtonSave.title}
                </Button>
            </div>
        </form>
    );
};

export default SettingsForm;
