import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm, { IFormProps } from '../../components/common/AuthForm/AuthForm';
import { Routes } from '../../constants/routes';
import { PageProps } from '../../types/page';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {setUserAction} from "../../store/reducers/userReducer"
// import PageWrapper from "../../components/common/PageWrapper/PageWrapper";
//
// import {Routes} from "../../constants/routes";
// import AuthForm, {IFormProps} from "../../components/common/AuthForm/AuthForm";
// import { handleUserSignUp } from '../../store/asyncActions/userActions';
// import { useNavigate } from 'react-router-dom';

interface ISignUpForm {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}


const SignUpPage: FC<PageProps> = ({ title = "" }) => {
    const [signUpForm, setSignUpForm] = useState<ISignUpForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();


    // const handleUserRedirect = () => navigate(`${Routes.signUpConfirmation}?email=${signUpForm.email}`);

    const handleSubmit = async () => {
            const auth = getAuth();

            await createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: signUpForm.name
                    })
                    dispatch(setUserAction({
                        email: user.email,
                        id: user.uid,
                        username: user.displayName,
                    }
                ))
            })
            .catch(console.error);
            // @ts-ignore
            sendEmailVerification(auth.currentUser)
    }

    // @ts-ignore
    const  {user}  = useSelector(state => state.user)
    useEffect(() => {

    },[user])


    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => setSignUpForm(prevState => ({...prevState, email}));
    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name }}): void => setSignUpForm(prevState => ({...prevState, name}));
    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => setSignUpForm(prevState => ({...prevState, password}));
    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword }}): void => setSignUpForm(prevState => ({...prevState, confirmPassword}));

    const signUpFormConfig: IFormProps = {
        inputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: signUpForm.name,
                onChange: handleSetName,
                placeholder: "Enter your Name",
                required: true
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signUpForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email",
                required: true
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: signUpForm.password,
                onChange: handleSetPassword,
                type: "password",
                placeholder: "Enter your Password",
                required: true
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                value: signUpForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                type: "password",
                placeholder: "Confirm your Password",
                required: true
            }
        ],
        page: Routes.signUp,
        actionButton: {
            onSubmit: handleSubmit,
            title: "Sign Up"
        },
        topText: 'Sign Up',
        disabledButton: false
    }

    return (
        <div>
            <AuthForm {...signUpFormConfig} />
        </div>
    );
};

export default SignUpPage;