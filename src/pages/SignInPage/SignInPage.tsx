import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';
//
// import {useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import { Routes } from '../../constants/routes';
import {useContext} from "react";
import firebase from 'firebase/compat/app';
import {getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, inMemoryPersistence, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {setUserAction} from "../../store/reducers/userReducer";
import {signInWithCredential} from "@firebase/auth";
import Button from "../../components/common/Button/Button";
import {useLocation, useNavigate} from "react-router-dom";
import {handleCatchError} from "../../utils/errorCatcher";
import {initialFormElementsError} from "../SignUpPage/SignUpPage";
import Logo from "../../components/common/Header/Logo/Logo";
import AuthWrapper from "../../components/common/AuthWrapper/AuthWrapper";

// import {handleUserSignIn} from "../../store/asyncActions/userActions";

// import {Routes} from "../../constants/routes";
// import {PageProps} from "../../types/page";

interface ISignInForm {
    email: string,
    password: string
}

const initialISignInForm = {
    email: "",
    password: "",
}

export interface FormElementError {
    text: string | null
    error: boolean
}

export interface IFormErrors {
    name?: FormElementError
    email?: FormElementError
    password?: FormElementError
    confirmPassword?: FormElementError
}

const initialErrorValue = { text: null, error: false }

// @ts-ignore
const SignInPage: FC = () => {
    const [signInForm, setSignInForm] = useState<ISignInForm>(initialISignInForm);
    const [signInRequestError, setSignInRequestError] = useState<FormElementError>(initialErrorValue);
    const [signInInputError, setSignInInputError] = useState<IFormErrors>(initialFormElementsError)

    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate()
    const handleLogoOnClick = () => navigate(Routes.main)

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        setSignInInputError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSignInForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        setSignInInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSignInForm(prevState => ({...prevState, password}));
    }

    const handleUserNavigate = () => navigate(Routes.main)

    const handleSignIn = async () => {
        setSignInRequestError(initialErrorValue)
        const isValid = handleFormValidate()
        if (isValid) {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, signInForm.email, signInForm.password)
                .then(({user}) => {
                    dispatch(setUserAction({
                        email: user.email,
                        id: user.uid,
                        username: user.displayName,
                        photo: user.photoURL
                    }));
                    handleUserNavigate()
                    setSignInRequestError(initialErrorValue)
                    setSignInForm(initialISignInForm)
                })
                .catch((error) => {
                    setSignInRequestError(handleCatchError(error.code))
                });
        }

        }

    const handleFormValidate = () => {
        let isValid = true
        for (let field in signInForm) {
            // @ts-ignore
            if (!signInForm[field]) {
                // @ts-ignore
                setSignInInputError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }
        return isValid
    }

    const signInFormConfig: IFormProps = {
        inputs: [
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signInForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email",
                error: signInInputError.email
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: signInForm.password,
                type: "password",
                onChange: handleSetPassword,
                placeholder: "Enter your Password",
                error: signInInputError.password
            }
        ],
        page: Routes.signIn,
        actionButton: {
            onSubmit: handleSignIn,
            title: "Sign In"
        },
        topText: location.pathname === "/signup/success" ? "Your password has been changed !" : "" ,
        requestError: signInRequestError,
        title: "Sign In"
    }

    return (
        <AuthWrapper>
            <AuthForm {...signInFormConfig} />
        </AuthWrapper>
    );
};

export default SignInPage;