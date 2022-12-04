
import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';


import styles from './Header.module.css'
import {useLocation, useNavigate} from "react-router-dom";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import {Routes} from "../../../constants/routes";
import UserInfo from "./UserInfo/UserInfo";
import {useAuth} from "../../../hooks/use-Auth";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import DefaultInfo from "./DefaultInfo/DefaultInfo";
import {setUserAction} from "../../../store/reducers/userReducer";
import {useDispatch} from "react-redux";
import FilterMenu from './FilterMenu/FilterMenu';
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";



const Header: FC  = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = useState<boolean>(false);

    const {theme} = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    let auth = useAuth()

    let isAuth = auth?.isAuth


    const handleSearchQueryChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        location.search = `?search=${event.target.value}`
    }
    const handleToggleBurgerMenu = () => setOpen(prevState => !prevState);
    const handleDefaultInfoOnClick = () => navigate(Routes.signIn)
    const handleLogoOnClick = () => navigate(Routes.main)
    const handleLogOut = async () => {
        const authState = getAuth()
        await signOut(authState).then(() => {
            dispatch(setUserAction(null))
        }).catch(console.error);
    }

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`${Routes.search}?search=${searchQuery}`)
        setSearchQuery("")
    }

    return (
        <header className={`${styles.headerWrapper}
            ${theme === ThemeVariant.light ? styles.headerWhiteWrapper : ""}`}>
            <Logo onClick={handleLogoOnClick}/>
            <Search query={searchQuery} onChange={handleSearchQueryChange} onSubmit={handleSearch}/>
            {
                isAuth ? <UserInfo theme={theme} userName={auth?.username} avatarUrl={auth?.photo} onClickLogOut={handleLogOut}
                                onClick={handleToggleBurgerMenu} isOpen={open}/>
                        :
                         <DefaultInfo onClick={handleDefaultInfoOnClick}/>
            }
        </header>
    );
};

export default Header;
