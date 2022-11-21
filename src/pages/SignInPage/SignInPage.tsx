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

// import {handleUserSignIn} from "../../store/asyncActions/userActions";

// import {Routes} from "../../constants/routes";
// import {PageProps} from "../../types/page";

interface ISignInForm {
    email: string,
    password: string
}

export interface FormElementError {
    text: string | null
    error: boolean
}

const initialErrorValue = { text: null, error: false }

// @ts-ignore
const SignInPage: FC = () => {
    const [signInForm, setSignInForm] = useState<ISignInForm>({ email: "", password: "" });
    const [signInError, setSignInError] = useState<FormElementError>(initialErrorValue)

    const dispatch = useDispatch();

    const navigate = useNavigate()
    const location = useLocation();

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        setSignInForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        setSignInForm(prevState => ({...prevState, password}));
    }

    // const handleUserNavigate = () => navigate(Routes.blog)

    const handleSignIn = async () => {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, signInForm.email, signInForm.password)
                .then(({user}) => {
                    console.log(user);
                    dispatch(setUserAction({
                        email: user.email,
                        id: user.uid,
                        name: user.displayName
                    }));
                    setSignInError(initialErrorValue)
                })
                .catch((error)=> {
                    handleCatchError(error.code)});

        }

        function handleCatchError (error: {}) {
            switch (error) {
                case "auth/wrong-password":
                    setSignInError({ error: true, text: "Неверный пароль" })
                    break
                case "auth/user-not-found":
                    setSignInError({ error: true, text: "Пользователя не существует" })
                    break
                case "auth/too-many-requests":
                    setSignInError({ error: true, text: "Попробуйте войти позже" })
                    break
                case "auth/invalid-email":
                    setSignInError({ error: true, text: "Неверный email" })
                    break
                default: setSignInError({ error: true, text: "Что-то пошло не так, попробуйте еще раз" })
            }
        }

    const signInFormConfig: IFormProps = {
        inputs: [
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signInForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email"
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: signInForm.password,
                type: "password",
                onChange: handleSetPassword,
                placeholder: "Enter your Password"
            }
        ],
        page: Routes.signIn,
        actionButton: {
            onSubmit: handleSignIn,
            title: "Sign In"
        },
        topText: location.pathname === "/signup/success" ? "Your password has been changed !" : "" ,
        error: signInError
    }

    return (
        <div>
            <AuthForm {...signInFormConfig} />
            {signInError && <div>{signInError.text}</div>}
        </div>
    );
};

export default SignInPage;