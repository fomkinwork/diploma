import React, {ChangeEventHandler, FC, useState} from 'react';

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {PageProps} from "../../types/page";

import {Routes} from "../../constants/routes";
import {getAuth, sendPasswordResetEmail, signOut, updatePassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import Logo from "../../components/common/Header/Logo/Logo";

interface IResetPasswordForm {
    newPassword: string,
    confirmPassword: string
}

const ResetPasswordPage: FC<PageProps> = ({ title = "" }) => {
    const [resetPasswordForm, setResetPasswordForm] = useState<IResetPasswordForm>({
        newPassword: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();
    const auth = getAuth()
    const user = auth.currentUser

    const handleUserNavigateToSuccesPage = () => navigate(Routes.resetPasswordSuccess)
    const handleUserNavigateToSignInPage = () => navigate(Routes.signIn)

    const handleChangePassword = async () => {
        // @ts-ignore
        await updatePassword(user, resetPasswordForm.confirmPassword)
            .then(() => {
                handleUserNavigateToSuccesPage()
                signOut(auth)
            })
            .catch((error) => {
                if (error.code === "auth/requires-recent-login") {
                    handleUserNavigateToSignInPage()
                }
            });
    }

    const handleSetNewPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: newPassword}}) => setResetPasswordForm(prevState => ({...prevState, newPassword}));
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword}}) => setResetPasswordForm(prevState => ({...prevState, confirmPassword}));

    const resetPasswordFormConfig: IFormProps = {
        page: Routes.resetPassword,
        inputs: [{
            id: "newPassword",
            name: "userNewPassword",
            value: resetPasswordForm.newPassword,
            onChange: handleSetNewPassword,
            title: "New Password",
            placeholder: "Enter your New Password"
        },
            {
            id: "confirmPassword",
            name: "userConfirmPassword",
            value: resetPasswordForm.confirmPassword,
            onChange: handleSetConfirmPassword,
            title: "Confirm Password",
            placeholder: "Confirm your New Password"
        }],
        actionButton: {
            onSubmit: handleChangePassword,
            title: "Send Link"
        }
    }

    return (
        <div title={title}>
            <Logo/>
            <AuthForm {...resetPasswordFormConfig} />
        </div>
    );
};

export default ResetPasswordPage;