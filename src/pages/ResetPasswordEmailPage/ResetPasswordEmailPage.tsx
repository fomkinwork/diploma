import React, {ChangeEventHandler, FC, useState} from 'react';

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";

import {PageProps} from "../../types/page";
import {Routes} from "../../constants/routes";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import {useNavigate} from "react-router-dom";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import Logo from "../../components/common/Header/Logo/Logo";

const ResetPasswordEmailPage: FC<PageProps> = ({ title = "" }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("")

    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: { value: email }}) => setEmail(email);
    const handleRedirectToHomePage = () => navigate(Routes.main);

    const handleSendPasswordResetEmail = async () => {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email)
            .then((res) => {
                console.log(res);
            })
            .catch(console.error);
        await handleRedirectToHomePage
    }



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
            onSubmit: handleSendPasswordResetEmail,
            title: "Send Link"
        }
    }

    return (
        <div>
            <Logo/>
            <AuthForm {...resetPasswordEmailFormConfig} />
        </div>
    );
};

export default ResetPasswordEmailPage;