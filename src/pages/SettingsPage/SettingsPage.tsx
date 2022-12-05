import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';

import {PageProps} from "../../types/page";
import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import SettingsForm, {ISettingsFormProps} from "../../components/common/SettingsForm/SettingsForm";
import {
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    updateEmail,
    updatePassword,
    updateProfile
} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {ThemeVariant, useTheme} from "../../context/ThemeContext";
import {IFormErrors, initialFormElementsError} from "../SignUpPage/SignUpPage";
import {FormElementError, initialErrorValue} from "../SignInPage/SignInPage";
import {handleCatchError} from "../../utils/errorCatcher";


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

export interface ITopText {
    name?: string,
    email?: string,
    password?: string,
}

export const initialTopTextValue =  {
    name: "",
    email: "",
    password: "",
}

const SettingsPage:FC<PageProps> = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    // @ts-ignore
    const [settingsForm, setSettingsForm] = useState<ISettingsForm>(initialISettingsForm);
    const [settingsFormInputError, setSettingsFormInputError] = useState<IFormErrors>(initialFormElementsError);
    const [settingsFormRequestError, setSettingsFormRequestError] = useState<FormElementError>(initialErrorValue);
    const [topText, setTopText] = useState<ITopText>(initialTopTextValue)

    const {theme, setTheme, isLightTheme} = useTheme()
    

    const handleSetTheme = () => {
        theme === ThemeVariant.dark ? setTheme(ThemeVariant.light) : setTheme(ThemeVariant.dark)
    };


    useEffect(() => {
        if (user !== null) {
            // @ts-ignore
            setSettingsForm({email : user.email, name : user.displayName,
                password:"",
                confirmPassword:"",
                newPassword:""})
        }}
        , [user])

    const handleSubmitSettingsForm = async () => {
        if (user !== null) {
            await handleChangeProfile (user)
            settingsForm.confirmPassword.length && await handleChangePassword(user)
        }
    }

    const handleCancelForm = () => {
        setSettingsForm(initialISettingsForm)
    }

    const handleChangeProfile = async (user: any) => {
        if (user.displayName !== settingsForm.name && settingsForm.name.length > 2) {
            await updateProfile(user, {
                displayName: settingsForm.name
            }).then(() => {
                setTopText(prevState => ({...prevState, name: "Profile Updated"}))
            }).catch(console.error);
            if (user.email !== settingsForm.email) {
                await updateEmail(user, settingsForm.email)
                    .then(() => {
                        sendEmailVerification(user)
                            .then(() => {
                                setTopText(prevState => ({...prevState, email: "Letter sent to email"}))
                            });
                    }).catch(console.error);
            }
        }
    }

    const handleChangePassword = async (user: any) => {
            if (!!settingsForm.password && !!settingsForm.newPassword &&
                settingsForm.newPassword === settingsForm.confirmPassword) {
                await signInWithEmailAndPassword(auth, settingsForm.email, settingsForm.password)
                    .then(({user}) => {
                        if (user.uid) {
                            updatePassword(user, settingsForm.confirmPassword).then(() => {
                                setTopText(prevState => ({ ...prevState, password: "Password changed" }))
                            }).catch((error) => setSettingsFormRequestError(handleCatchError(error.code)))
                        }
                    })
                    .catch((error) => {
                        console.error(error)
                        setSettingsFormRequestError(handleCatchError(error.code))})
            } else {
                setTopText(prevState => ({ ...prevState, password: "Error in fields, try again" }))
            }
    }

    const handleFormValidate = () => {
        let isValid = true
        for (let field in settingsForm) {
            // @ts-ignore
            if (!settingsForm[field]) {
                // @ts-ignore
                setSettingsFormInputError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }
        return isValid
    }

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        setSettingsFormInputError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, email}))};

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name }}): void => {
        setSettingsFormInputError(prevState => ({ ...prevState, name: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, name}))};

    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        setSettingsFormInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, password}))};

    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: newPassword }}): void => {
        setSettingsFormInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSettingsForm(prevState => ({...prevState, newPassword}))};

    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword }})
        : void => {
        setSettingsFormInputError(prevState => ({ ...prevState, confirmPassword: initialErrorValue }))
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
                error: settingsFormInputError.name
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: settingsForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email",
                error: settingsFormInputError.email
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
                error: settingsFormInputError.password
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
                error: settingsFormInputError.confirmPassword
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
                error: settingsFormInputError.confirmPassword
            }
        ],
        actionButtonCancel: {
            onCancel: handleCancelForm,
            title: "Cancel",
        },
        actionButtonSave: {
            onSubmit: handleSubmitSettingsForm,
            title: "Save"
        },
        themeSwitcherOnClick: handleSetTheme,
        condition: theme === ThemeVariant.dark,
        isLightTheme: isLightTheme,
        topText: topText,
        requestError: settingsFormRequestError
    }

    return (
        <PageWrapper>
            <SettingsForm {...settingsFormConfig} />
        </PageWrapper>
    );
};

export default SettingsPage;
