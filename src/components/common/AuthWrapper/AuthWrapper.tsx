import React, {FC} from 'react';
import {WithChildren} from "../../../types/withChildren";
import {inspect} from "util";
import styles from "./AuthWrapper.module.css"
import Logo from "../Header/Logo/Logo";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../constants/routes";

const AuthWrapper:FC <WithChildren> = ({children}) => {
    const navigate = useNavigate()
    const handleLogoOnClick = () => navigate(Routes.main)

    return (
        <>
            <div className={styles.authWrapper}>
                <div className={styles.authHeader}>
                    <Logo onClick={handleLogoOnClick}/>
                </div>
            </div>
            {children}
        </>
    );
};

export default AuthWrapper;
