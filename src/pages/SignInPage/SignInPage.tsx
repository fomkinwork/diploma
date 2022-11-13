import React, {ChangeEventHandler, FC, useState} from 'react';
import { Context } from '../..';
//
// import {useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import { Routes } from '../../constants/routes';
import {useContext} from "react";
import firebase from 'firebase/compat/app';

// import {handleUserSignIn} from "../../store/asyncActions/userActions";

// import {Routes} from "../../constants/routes";
// import {PageProps} from "../../types/page";

interface ISignInForm {
    email: string,
    password: string
}

const SignInPage: FC = () => {
    const [signInForm, setSignInForm] = useState<ISignInForm>({ email: "", password: "" });

    // const dispatch = useDispatch();
    //
    // const navigate = useNavigate()

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        setSignInForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        setSignInForm(prevState => ({...prevState, password}));
    }

    // const handleUserNavigate = () => navigate(Routes.blog)

    // const handleUpdateAccessToken = async () => {
    //     const token = localStorage.getItem("refresh");
    //
    //     if (!!token) {
    //         const { accessToken  } = await UserService.accessTokenUpdate(token);
    //         localStorage.setItem("access", accessToken);
    //
    //         return accessToken
    //     }
    // }

    // const handleVerifyToken = async () => {
    //     const token = localStorage.getItem("access");
    //
    //     const result = {
    //         token: token,
    //         valid: false
    //     }
    //
    //     if (!!token) {
    //         await UserService.tokenVerify(token)
    //         result.valid = true
    //     }
    //
    //     return result
    // }
    //
    // const handleUserInformationCall = async (token: string) => {
    //     return await UserService.getUser(token)
    // }

    // const handleUserInformationGet = async () => {
    //     const { valid, token } = await handleVerifyToken()
    //
    //     let user;
    //
    //     if (valid && token) {
    //         user = await handleUserInformationCall(token)
    //     } else  {
    //         const token = await handleUpdateAccessToken();
    //         user = await handleUserInformationCall(token)
    //     }
    //
    //     return user
    // }

    // @ts-ignore
    const {auth} = useContext(Context)
    console.log(auth)
    const handleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        console.log(provider)
        const {user} = auth.signInWithPopup(provider)
        console.log(user)
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
        }
    }

    return (
        <div>
            <AuthForm {...signInFormConfig} />
        </div>
    );
};

export default SignInPage;