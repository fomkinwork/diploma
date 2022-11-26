import React, {FC} from 'react';

import styles from './SettingsForm.module.css'
import {InputProps} from "../../../types/formElements";
import {FormElementError} from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import Button from "../Button/Button";

export interface ISettingsFormProps {
    actionButton: {
        title: string,
        onSubmit: () => void
    }
    profileInputs?: InputProps[]
    passwordInputs?: InputProps[]
    topText?: string
    requestError?: FormElementError
}

const SettingsForm:FC<ISettingsFormProps> = ({profileInputs=[], passwordInputs=[], topText,
                                             requestError, actionButton}) => {
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
                <div className={styles.contentBlock}>
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
