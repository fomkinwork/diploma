import React, {FC} from 'react';

import styles from './SettingsForm.module.css'
import {InputProps} from "../../../types/formElements";
import {FormElementError} from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import Button, {ButtonVariantProps} from "../Button/Button";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import {ThemeVariant} from "../../../context/ThemeContext";
import {ITopText} from "../../../pages/SettingsPage/SettingsPage";

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
    topText?: ITopText
    requestError?: FormElementError
    themeSwitcherOnClick?: any
    condition?: any
    isLightTheme?: boolean
}

const SettingsForm:FC<ISettingsFormProps> = ({profileInputs=[], passwordInputs=[], topText,
                                             requestError,actionButtonCancel,
                                             actionButtonSave,
                                             themeSwitcherOnClick, condition, isLightTheme}) => {
    return (
        <form className={styles.formWrapper}>
            <div className={styles.formBlock}>
                <p className={`${styles.topText} ${isLightTheme ? styles.topTextLight : ""}`}>
                    {topText?.name ? topText.name : 'Profile'}
                </p>
                    <div className={`${styles.contentBlock}
                     ${isLightTheme ? styles.contentBlockWhite : ""}`}>
                        {profileInputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
                    </div>
            </div>
            <div className={styles.formBlock}>
                <p className={`${styles.topText} ${isLightTheme ? styles.topTextLight : ""}`}>
                    {requestError?.text ? requestError?.text :
                    topText?.password ? topText.password : "Password"}
                </p>
                    <div className={`${styles.contentBlock}
                    ${isLightTheme ? styles.contentBlockWhite : ""}`}>
                    {passwordInputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
                    </div>
            </div>
            <div className={styles.formBlock}>
                <p className={`${styles.topText} ${isLightTheme ? styles.topTextLight : ""}`}>Color mode</p>
                <div className={`${styles.contentBlockTheme}
                 ${isLightTheme ? styles.contentBlockWhite : ""}`}>
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
