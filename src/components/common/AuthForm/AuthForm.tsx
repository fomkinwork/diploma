import React, {FC, useMemo, useState} from 'react';
import { InputProps } from '../../../types/formElements';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from "./AuthForm.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Routes} from "../../../constants/routes";
import ResetPasswordPage from "../../../pages/ResetPasswordPage/ResetPasswordPage";

export interface IFormProps {
    page?: any
    actionButton: {
        title: string,
        onSubmit: () => void
    }
    inputs?: InputProps[]
    topText?: string
    disabledButton?: boolean
    requestError?: FormElementError
    title?: string
}

export interface FormElementError {
    text: string | null
    error: boolean
}

interface IFormErrors {
    title: FormElementError
    image: FormElementError
    description: FormElementError
    text: FormElementError
}

const initialErrorValue = { text: null, error: false }

const initialFormElementsError: IFormErrors = {
    title: initialErrorValue,
    image: initialErrorValue,
    description: initialErrorValue,
    text: initialErrorValue,
}

const AuthForm:FC<IFormProps> = ({ inputs= [], topText, page, actionButton,
                                 disabledButton, requestError, title}) => {

    const isSignInPage = useMemo(() => page === Routes.signIn, [page])
    const isSignUpPage = useMemo(() => page === Routes.signUp, [page])
    
    return (
        <form className={styles.formWrapper}>
            {title && <p className={styles.title}>{title}</p>}
            <div className={styles.errorBlock}>
                {topText ? <p className={styles.topText}>{topText}</p> : requestError ? <p className={styles.topTextError}>{requestError.text}</p> : ""}
            </div>
            {inputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
            {isSignInPage && <Link className={styles.forgotPassword} to={Routes.resetPasswordEmail}>Forgot password?</Link>}
            <Button
                disabled={disabledButton}
                onClick={actionButton.onSubmit}
                className={styles.submitButton}
            >
                {actionButton.title}
            </Button>
            {(isSignInPage || isSignUpPage) && (
                <div className={styles.bottomText}>
                    <p className={styles.text}>
                        {isSignInPage ? "Don’t have an account?" : "Already have an account?"}
                        <Link
                            className={styles.link}
                            to={isSignInPage ? Routes.signUp : Routes.signIn}
                        >
                            {isSignInPage ? "Sign Up" : "Sign In" }
                        </Link>
                    </p>
                </div>
            )}
        </form>
    );
};

export default AuthForm;
