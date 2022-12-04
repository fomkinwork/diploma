import React, {FC} from 'react';

import styles from './SettingsForm.module.css'
import {InputProps} from "../../../types/formElements";
import {FormElementError} from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

export interface ISettingsFormProps {
    actionButton: {
        title: string,
        onSubmit: () => {}
    }
    profileInputs?: InputProps[]
    passwordInputs?: InputProps[]
    topText?: string
    requestError?: FormElementError
    themeSwitcherOnClick?: any
    condition?: any
}

const SettingsForm:FC<ISettingsFormProps> = ({profileInputs=[], passwordInputs=[], topText,
                                             requestError, actionButton,
                                             themeSwitcherOnClick, condition}) => {
    return (
        <form className={styles.formWrapper}>
            <div className={styles.formBlock}>
                <p className={styles.topText}>Profile</p>
                    <div className={styles.contentBlock}>
                        {profileInputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
                    </div>
            </div>
            <div className={styles.formBlock}>
                <p className={styles.topText}>Password</p>
                <div className={styles.contentBlock}>
                    {passwordInputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
                </div>
            </div>
            <div className={styles.formBlock}>
                <p className={styles.topText}>Color mode</p>
                <div className={styles.contentBlockTheme}>
                    <div className={styles.textBlock}>
                        <span className={styles.themeTopText}>Dark</span>
                        <span className={styles.themeText}>Use dark theme</span>
                    </div>
                    <ThemeSwitcher onClick={themeSwitcherOnClick} condition={condition}/>
                </div>
            </div>
            <Button
                onClick={actionButton.onSubmit}
                className={styles.submitButton}
            >
                {actionButton.title}
            </Button>
        </form>
    );
};

export default SettingsForm;
