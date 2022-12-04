import React, {ChangeEventHandler, FC, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm, { IFormProps } from '../../components/common/AuthForm/AuthForm';
import { Routes } from '../../constants/routes';
import { PageProps } from '../../types/page';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {setUserAction} from "../../store/reducers/userReducer"
import {handleCatchError} from "../../utils/errorCatcher";
import Logo from "../../components/common/Header/Logo/Logo";
import AuthWrapper from "../../components/common/AuthWrapper/AuthWrapper";
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

const initialISignUpForm = {
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
}

const initialErrorValue =  { text: null, error: false }

export interface FormElementError {
    text: string | null
    error: boolean
}

export interface IFormErrors {
    name?: FormElementError
    email?: FormElementError
    password?: FormElementError
    confirmPassword?: FormElementError
}


export const initialFormElementsError: IFormErrors = {
    name: initialErrorValue,
    email: initialErrorValue,
    password: initialErrorValue,
    confirmPassword: initialErrorValue,
}

const SignUpPage: FC<PageProps> = ({ title = "" }) => {
    const [signUpForm, setSignUpForm] = useState<ISignUpForm>(initialISignUpForm);
    const [signUpRequestError, setSignUpRequestError] = useState<FormElementError>(initialErrorValue)
    const [signUpInputError, setSignUpInputError] = useState<IFormErrors>(initialFormElementsError)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleUserRedirect = () => navigate(`${Routes.signUpConfirmation}?email=${signUpForm.email}`);

    const handleSubmit = async () => {
        setSignUpRequestError(initialErrorValue)
        const isValid = handleFormValidate()
            if (isValid) {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, signUpForm.email, signUpForm.password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(user, {
                            displayName: signUpForm.name,
                        })
                        dispatch(setUserAction({
                                email: user.email,
                                id: user.uid,
                                username: user.displayName,
                                photo: user.photoURL
                            }
                        ))
                        setSignUpForm(initialISignUpForm)
                    })
                    .catch((error) => setSignUpRequestError(handleCatchError(error.code)));
                // @ts-ignore
                await sendEmailVerification(auth.currentUser)
                    .then((res) => console.log(res))
                    .catch((error) => setSignUpRequestError(handleCatchError(error.code)))}

    }

    const handleFormValidate = () => {
        let isValid = true
        for (let field in signUpForm) {
            // @ts-ignore
            if (!signUpForm[field]) {
                // @ts-ignore
                setSignUpInputError(prevState => ({ ...prevState, [field]: { error: true, text: "Required Field is Empty" } }))
                isValid = false
            }
        }
        return isValid
    }

    // @ts-ignore
    const  {user}  = useSelector(state => state.user)
    useEffect(() => {

    },[user])


    const handleSetEmail: ChangeEventHandler<HTMLInputElement> = ({target: {value: email }}): void => {
        setSignUpInputError(prevState => ({ ...prevState, email: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, email}))};

    const handleSetName: ChangeEventHandler<HTMLInputElement> = ({target: {value: name }}): void => {
        setSignUpInputError(prevState => ({ ...prevState, name: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, name}))};

    const handleSetPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: password }}): void => {
        setSignUpInputError(prevState => ({ ...prevState, password: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, password}))};

    const handleSetConfirmPassword: ChangeEventHandler<HTMLInputElement> = ({target: {value: confirmPassword }})
        : void => {
        setSignUpInputError(prevState => ({ ...prevState, confirmPassword: initialErrorValue }))
        setSignUpForm(prevState => ({...prevState, confirmPassword}))};

    const signUpFormConfig: IFormProps = {
        inputs: [
            {
                title: "Name",
                id: "name",
                name: "userName",
                value: signUpForm.name,
                onChange: handleSetName,
                placeholder: "Enter your Name",
                required: true,
                error: signUpInputError.name
            },
            {
                title: "Email",
                id: "email",
                name: "userEmail",
                value: signUpForm.email,
                onChange: handleSetEmail,
                placeholder: "Enter your Email",
                required: true,
                error: signUpInputError.email
            },
            {
                title: "Password",
                id: "password",
                name: "userPassword",
                value: signUpForm.password,
                onChange: handleSetPassword,
                type: "password",
                placeholder: "Enter your Password",
                error: signUpInputError.password
            },
            {
                title: "Confirm Password",
                id: "confirmPassword",
                name: "userConfirmPassword",
                value: signUpForm.confirmPassword,
                onChange: handleSetConfirmPassword,
                type: "password",
                placeholder: "Confirm your Password",
                required: true,
                error: signUpInputError.confirmPassword
            }
        ],
        page: Routes.signUp,
        actionButton: {
            onSubmit: handleSubmit,
            title: "Sign Up"
        },
        disabledButton: false,
        requestError: signUpRequestError,
        title: "Sign Up"
    }

    return (
        <AuthWrapper>
            <AuthForm {...signUpFormConfig} />
        </AuthWrapper>
    );
};

export default SignUpPage;