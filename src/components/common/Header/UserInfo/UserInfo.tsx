import React, { FC } from 'react';

import {SVG_CONFIG} from "../../../../constants/svgConfig";

import Avatar from "./Avatar/Avatar";

// @ts-ignore
import styles from "./UserInfo.module.css"
import UserMenu from "./UserMenu/UserMenu";

interface UserInfoProps {
    onClickLogOut: () => void;
    onClick?: () => void;
    userName?: string
    avatarUrl?: string
    className?: string
    isOpen?: boolean
}

const UserInfo: FC<UserInfoProps> = (
    {
        onClick,
        userName= "User name",
        avatarUrl= "",
        className = "",
        onClickLogOut,
        isOpen= false
    }) => {
    return (
        <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
            <Avatar userName={userName} url={avatarUrl} />
            {!!userName && <span className={styles.userName}>{userName}</span>}
            <div className={styles.arrow}>{SVG_CONFIG.arrow}</div>
            {isOpen && <UserMenu onClick={onClickLogOut}/> }
        </div>
    );
};

export default UserInfo;