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
import {setThemeAction, ThemeVariant} from '../../store/reducers/themeReducer';


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
    const [themeState, setThemeState] = useState<ThemeVariant>()

    const handleSetTheme = () => {
        // if (themeState === ThemeVariant.dark) {
        //     setThemeState(ThemeVariant.light)
        //     dispatch(setThemeAction(theme))
        //     console.log(theme)
        // } else {
        //     setThemeState(ThemeVariant.dark)
        //     dispatch(setThemeAction(theme))
        // }
    }

    // useEffect(() => {
    //     setThemeState(theme)
    // },[])


    useEffect(() => {
        if (user !== null) {
            // @ts-ignore
            setSettingsForm({email : user.email, name : user.displayName})
        }}
        , [user])

    const handleSubmitSettingsForm = async () => {
        if (user !== null) {
            await handleChangeProfile (user)
            await handleChangePassword (user)
        }
    }

    const handleChangeProfile = async (user: any) => {
        if (user.displayName !== settingsForm.name) {
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
        actionButton: {
            onSubmit: handleSubmitSettingsForm,
            title: "Save"
        },
        themeSwitcherOnClick: handleSetTheme,
        condition: themeState === ThemeVariant.dark
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
