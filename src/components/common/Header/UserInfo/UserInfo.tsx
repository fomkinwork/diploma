import React, { FC } from 'react';

import {SVG_CONFIG} from "../../../../constants/svgConfig";

import Avatar from "./Avatar/Avatar";

// @ts-ignore
import styles from "./UserInfo.module.css"
import UserMenu from "./UserMenu/UserMenu";
import {ThemeVariant} from "../../../../context/ThemeContext";

interface UserInfoProps {
    onClickLogOut: () => void;
    onClick?: () => void;
    userName?: string | undefined;
    avatarUrl?: string
    className?: string
    isOpen?: boolean
    theme?: string
}

const UserInfo: FC<UserInfoProps> = (
    {
        onClick,
        userName="",
        avatarUrl= "",
        className = "",
        onClickLogOut,
        isOpen= false,
        theme
    }) => {
    return (
        <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
            <Avatar userName={userName} url={avatarUrl} />
            {!!userName && <span className={`${styles.userName} ${
            theme === ThemeVariant.light ? styles.userNameDark : ""
            }`}>{userName}</span>}
            <div className={styles.arrow}>{SVG_CONFIG.arrow}</div>
            {isOpen && <UserMenu onClick={onClickLogOut}/> }
        </div>
    );
};

export default UserInfo;