import React, {ChangeEventHandler, FC, useState} from 'react';

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";

import {PageProps} from "../../types/page";
import {Routes} from "../../constants/routes";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import {useNavigate} from "react-router-dom";

const ResetPasswordEmailPage: FC<PageProps> = ({ title = "" }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("")

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email }}) => setEmail(email);
    const handleRedirectToHomePage = () => navigate(Routes.blog);

    const resetPasswordEmailFormConfig: IFormProps = {
        topText: `You will receive an email with a link to reset your password!`,
        page: Routes.resetPasswordEmail,
        inputs: [{
            id: "email",
            name: "userEmail",
            value: email,
            onChange: handleSetEmail,
            title: "Email",
            placeholder: "Enter your Email"
        }],
        actionButton: {
            onSubmit: handleRedirectToHomePage,
            title: "Send Link"
        }
    }

    return (
        <div>
            <AuthForm {...resetPasswordEmailFormConfig} />
        </div>
    );
};

export default ResetPasswordEmailPage;