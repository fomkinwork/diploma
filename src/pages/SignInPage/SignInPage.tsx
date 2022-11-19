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

// import {handleUserSignIn} from "../../store/asyncActions/userActions";

// import {Routes} from "../../constants/routes";
// import {PageProps} from "../../types/page";

interface ISignInForm {
    email: string,
    password: string
}

// @ts-ignore
const SignInPage: FC = () => {
    const [signInForm, setSignInForm] = useState<ISignInForm>({ email: "", password: "" });

    const dispatch = useDispatch();

    // const navigate = useNavigate()

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        setSignInForm(prevState => ({...prevState, email}));
    }
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        setSignInForm(prevState => ({...prevState, password}));
    }

    // const handleUserNavigate = () => navigate(Routes.blog)

    const handleSignIn = async () => {
            const auth = getAuth();
                    // signInWithEmailAndPassword(auth, signInForm.email, signInForm.password))
            await signInWithEmailAndPassword(auth, signInForm.email, signInForm.password)
                .then(({user}) => {
                    console.log(user);
                    dispatch(setUserAction({
                        email: user.email,
                        id: user.uid,
                        name: user.displayName
                    }));
                })
                .catch(() => alert('Invalid user!'))

        }


        // @ts-ignore
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
            } else {
                console.log('User not authenticated')
            }
        })
    },[])



    // @ts-ignore
    const  {user}  = useSelector(state => state.user)

    console.log(user)

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