import React, {FC, useState} from 'react';

// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";

import {PageProps} from "../../types/page";
import {Routes} from "../../constants/routes";
import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
import {useNavigate} from "react-router-dom";

const SignUpSuccessPage: FC<PageProps> = ({ title = "" }) => {
    const navigate = useNavigate();

    const handleRedirectToHomePage = () => navigate(Routes.blog);

    const SignUpSuccessFormConfig: IFormProps = {
        topText: `Email confirmed. <br /> Your registration is now completed`,
        page: Routes.signUpSuccess,
        actionButton: {
            onSubmit: handleRedirectToHomePage,
            title: "Go to home"
        }
    }

    return (
        <div title={title}>
            <AuthForm {...SignUpSuccessFormConfig} />
        </div>
    );
};

export default SignUpSuccessPage;