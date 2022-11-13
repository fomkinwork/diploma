import React, {ChangeEventHandler, FC, useState} from 'react';

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";

import {PageProps} from "../../types/page";

import {Routes} from "../../constants/routes";

interface IResetPasswordForm {
    newPassword: string,
    confirmPassword: string
}

const ResetPasswordPage: FC<PageProps> = ({ title = "" }) => {
    const [resetPasswordForm, setResetPasswordForm] = useState<IResetPasswordForm>({
        newPassword: "",
        confirmPassword: ""
    })

    const handleSendLink = () => console.log("Link Was Sent");
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
            onSubmit: handleSendLink,
            title: "Send Link"
        }
    }

    return (
        <div title={title}>
            <AuthForm {...resetPasswordFormConfig} />
        </div>
    );
};

export default ResetPasswordPage;