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
import Content from "../pages/ContentPages/ContentPages";
import Main from "../pages/Main/Main";
import ResetPasswordEmailPage from "../pages/ResetPasswordEmailPage/ResetPasswordEmailPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import TrendsPage from "../pages/TrendsPage/TrendsPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import SearchPage from "../pages/SearchPage/SearchPage";

// @ts-ignore
export interface IRoute extends RouteObject{
    path: string,
    Element: FC<PageProps>,
    title?: string
}

export enum Routes {
    signIn = "/signin",
    signUp = "/signup",
    main = "/main",
    trends = "/trends",
    content = "/main/:id",
    favorites = "/favorites",
    search = "/search-by-keyword",
    settings = "/settings",
    resetPasswordSuccess = "/reset-password/success",
    resetPasswordEmail = "/reset-password",
    resetPassword = "/reset-password/new-password",
    signUpConfirmation = "/activate/:uid/:token"
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.signIn, Element: SignInPage, title: "Sign In"},
    {path: Routes.signUp, Element: SignUpPage, title: "Sign Up"},
    {path: Routes.main, Element: Main, title: "Blog"},
    {path: Routes.content, Element: Content},
    {path: Routes.resetPasswordEmail, Element: ResetPasswordEmailPage, title: "Reset password"},
    {path: Routes.resetPassword, Element: ResetPasswordPage, title: "New password"},
    {path: Routes.trends, Element: TrendsPage},
    {path: Routes.favorites, Element: FavoritesPage},
    // {path: Routes.signUpConfirmation, Element: SignUpConfirmationPage, title: "Registration confirmation"},
    {path: Routes.resetPasswordSuccess, Element: SignInPage, title: "Success"},
    {path: Routes.settings, Element: SettingsPage, title: "Settings"},
    {path: Routes.search, Element: SearchPage},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
    // {path: Routes.search, Element: SearchResultsPage},
]

