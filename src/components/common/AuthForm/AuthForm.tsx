import React, { FC } from 'react';
import { InputProps } from '../../../types/formElements';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from "./AuthForm.module.css";

export interface IFormProps {
    page?: any
    actionButton: {
        title: string,
        onSubmit: () => void
    }
    inputs?: InputProps[]
    topText?: string
}

const AuthForm:FC<IFormProps> = ({ inputs= [], topText = "", page, actionButton }) => {
    
    const isSignInPage = true
    const isSignUpPage = false
    
    return (
        <form className={styles.formWrapper}>
            {!!topText && <p className={styles.topText} dangerouslySetInnerHTML={{__html: topText}}></p>}
            {inputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
            <Button
                onClick={actionButton.onSubmit}
                className={styles.submitButton}
            >
                {actionButton.title}
            </Button>
            {(isSignInPage || isSignUpPage) && (
                <div className={styles.bottomText}>
                    <p className={styles.text}>
                        {isSignInPage ? "Don’t have an account?" : "Already have an account?"}
                        <a
                            className={styles.link}
                        >
                            {isSignInPage ? "Sign Up" : "Sign In" }
                        </a>
                    </p>
                </div>
            )}
        </form>
    );
};

export default AuthForm;
