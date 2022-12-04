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

    const dispatch = useDispatch()
    // @ts-ignore
    const [settingsForm, setSettingsForm] = useState<ISettingsForm>(initialISettingsForm);
    const [settingsFormInputError, setSettingsFormInputError] = useState<IFormErrors>(initialFormElementsError);
    const [signInRequestError, setSignInRequestError] = useState<FormElementError>(initialErrorValue);
    console.log(settingsFormInputError)
    console.log(settingsForm)
    const {theme, setTheme} = useTheme()

    const handleSetTheme = () => {
        theme === ThemeVariant.dark ? setTheme(ThemeVariant.light) : setTheme(ThemeVariant.dark)
    };


    useEffect(() => {
        if (user !== null) {
            // @ts-ignore
            setSettingsForm({email : user.email, name : user.displayName,password:"",confirmPassword:"", newPassword:""})
        }}
        , [user])

    const handleSubmitSettingsForm = async () => {
        if (user !== null) {
            await handleChangeProfile (user)
            await handleChangePassword (user)
        }
    }

    const handleCancelForm = () => {
        setSettingsForm(initialISettingsForm)
    }

    const handleChangeProfile = async (user: any) => {
        const isValid = handleFormValidate()
        if (isValid) {
            if (user.displayName !== settingsForm.name && settingsForm.name.length > 2){
                await updateProfile(user, {
                    displayName: settingsForm.name
                }).then(() => {
                    console.log("Profile updated")
                }).catch(console.error);
            } else {
                console.log("need to change some fields")
            }
            if (user.email !== settingsForm.email) {
                await updateEmail(user, settingsForm.email)
                    .then(() => {
                        sendEmailVerification(user)
                            .then(() => {
                                console.log("Pismo otpravleno")
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
                        console.log(user.uid)
                        updatePassword(user, settingsForm.confirmPassword).then(() => {
                            console.log("Password updated")
                        }).catch(console.error);
                    }
                })
                .catch(console.error);
        } else {
            console.log("incorrect password")
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
        theme: theme
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
