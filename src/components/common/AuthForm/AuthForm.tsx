import React, {FC, useMemo, useState} from 'react';
import { InputProps } from '../../../types/formElements';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from "./AuthForm.module.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Routes} from "../../../constants/routes";

export interface IFormProps {
    page?: any
    actionButton: {
        title: string,
        onSubmit: () => void
    }
    inputs?: InputProps[]
    topText?: string
    disabledButton?: boolean
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

const AuthForm:FC<IFormProps> = ({ inputs= [], topText = "", page, actionButton,
                                 disabledButton}) => {

    const isSignInPage = useMemo(() => page === Routes.signIn, [page])
    const isSignUpPage = useMemo(() => page === Routes.signUp, [page])

    const [formFieldsError, setFormFieldsError] = useState<IFormErrors>(initialFormElementsError)

    const handleFormValidate = () => {
        let isValid = true
        for (let field in inputs) {
            // @ts-ignore
            if (!addPostForm[field]) {
                // @ts-ignore
                setFormFieldsError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }

        return isValid
    }
    
    return (
        <form className={styles.formWrapper}>
            {!!topText && <p className={styles.topText} dangerouslySetInnerHTML={{__html: topText}}></p>}
            {inputs.map(input => <Input className={styles.formInput} key={input.id} {...input} />)}
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
