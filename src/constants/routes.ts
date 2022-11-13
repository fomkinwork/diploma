import {FC} from "react";

import {RouteObject} from "react-router-dom";

// import BlogPage from "../pages/BlogPage/BlogPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
// import PostPage from "../pages/PostPage/PostPage";
// import SignUpConfirmationPage from "../pages/SignUpConfirmationPage/SignUpConfirmationPage";
// import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
// import ResetPasswordEmailPage from "../pages/ResetPasswordEmailPage/ResetPasswordEmailPage";
// import SignUpSuccessPage from "../pages/SignUpSuccessPage/SignUpSuccessPage";
// import AddPostPage from "../pages/AddPostPage/AddPostPage";
// import SearchResultsPage from "../pages/SearchResultsPage/SearchResultsPage";

import {PageProps} from "../types/page";

// @ts-ignore
export interface IRoute extends RouteObject{
    path: string,
    Element: FC<PageProps>,
    title?: string
}

export enum Routes {
    signIn = "/signin",
    signUp = "/signup",
    blog = "/blog",
    post = "/blog/:id",
    search = "/search",
    addPost = "/add-post",
    signUpSuccess = "/signup/success",
    resetPasswordEmail = "/reset-password",
    resetPassword = "/reset-password/new-password",
    signUpConfirmation = "/activate/:uid/:token"
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.signIn, Element: SignInPage, title: "Sign In"},
    {path: Routes.signUp, Element: SignUpPage, title: "Sign Up"},
    // {path: Routes.blog, Element: BlogPage, title: "Blog"},
    // {path: Routes.post, Element: PostPage},
    // {path: Routes.signUpConfirmation, Element: SignUpConfirmationPage, title: "Registration confirmation"},
    // {path: Routes.resetPasswordEmail, Element: ResetPasswordEmailPage, title: "Reset password"},
    // {path: Routes.resetPassword, Element: ResetPasswordPage, title: "New password"},
    // {path: Routes.signUpSuccess, Element: SignUpSuccessPage, title: "Success"},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
    // {path: Routes.search, Element: SearchResultsPage},
    // {path: Routes.addPost, Element: AddPostPage, title: "Add Post"},
]

