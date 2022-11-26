import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';

import styles from './SettingsPage.module.css'
import {PageProps} from "../../types/page";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import {TABS_CONFIG} from "../../components/common/Tabs/TabsConfig";
import Tabs from "../../components/common/Tabs/Tabs";
import {IFormProps} from "../../components/common/AuthForm/AuthForm";
import {Routes} from "../../constants/routes";
import SettingsForm, {ISettingsFormProps} from "../../components/common/SettingsForm/SettingsForm";
import {getAuth} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";

interface ISettingsForm {
    name: string,
    email: string,
    password: string,
    newPassword: string,
    confirmPassword: string
}

const initialISettingsForm = {
    name: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: ""
}


const SettingsPage:FC<PageProps> = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    const [settingsForm, setSettingsForm] = useState<ISettingsForm>(initialISettingsForm);

    useEffect(() => {
        if (user !== null) {
            // @ts-ignore
            setSettingsForm({email : user.email, name : user.displayName})
        }}
        , [user])



    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        // setSignUpInputError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, email}))};

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name }}): void => {
        // setSignUpInputError(prevState => ({ ...prevState, name: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, name}))};

    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        // setSignUpInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, password}))};

    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: newPassword }}): void => {
        // setSignUpInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, newPassword}))};

    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword }})
        : void => {
        // setSignUpInputError(prevState => ({ ...prevState, confirmPassword: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, confirmPassword}))};

    const settingsFormConfig: ISettingsFormProps = {
        profileInputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: settingsForm.name,
                onChange: handleSetName,
                placeholder: "Enter your Name",
                required: true,
                // error: signUpInputError.name
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: settingsForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email",
                // error: signInInputError.email
            },
        ],
        passwordInputs: [
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: settingsForm.password,
                onChange: handleSetPassword,
                type: "password",
                placeholder: "Enter your Password",
                // error: signUpInputError.password
            },
            {
                title: "New Password",
                id: "newPassword",
                name: "userNewPassword",
                value: settingsForm.newPassword,
                onChange: handleSetNewPassword,
                type: "password",
                placeholder: "New Password",
                required: true,
                // error: signUpInputError.confirmPassword
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                value: settingsForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                type: "password",
                placeholder: "Confirm your Password",
                required: true,
                // error: signUpInputError.confirmPassword
            }
        ],
        // actionButton: {
        //     onSubmit: handleSignIn,
        //     title: "Sign In"
        // },
        // topText: location.pathname === "/signup/success" ? "Your password has been changed !" : "" ,
        // requestError: signInRequestError
    }

    return (
        <PageWrapper>
            <SettingsForm {...settingsFormConfig} />
        </PageWrapper>
    );
};

export default SettingsPage;
