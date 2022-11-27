import {FC} from 'react';
import {RouteObject} from "react-router-dom";
import Content from '../pages/ContentPages/ContentPages';

import Main from "../pages/Main/Main";

export interface IRoute extends RouteObject {
    path: string
    Element: any
    title?: string
}

export enum Routes {
    main = "/main",
    content = "/main/:id",
    addPost = "/add-post",
    signIn = "/signin",
    signUp = "/signup",
    signUpSuccess = "/signup/success",
    signUpConfirmation = "/activate/:uid/:token",
    resetPasswordEmail = "/reset-password",
    resetPassword = "/reset-password/reset",
    newPassword = "/new-password",
    search = "/search"
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.main, Element: Main, title: "Blog"},
    {path: Routes.content, Element: Content},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
]
