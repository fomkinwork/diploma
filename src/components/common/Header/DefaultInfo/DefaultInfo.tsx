import React, { FC } from 'react';

import styles from './DefaultInfo.module.css'

import {SVG_CONFIG} from "../../../../constants/svgConfig";
import Avatar from "../UserInfo/Avatar/Avatar";
import DefaultAvatar from "../UserInfo/Avatar/DefaultAvatar/DefaultAvatar";

// // @ts-ignore
// import styles from "./UserInfo.module.css"

interface UserInfoProps {
    onClick?: () => void;
    className?: string
}

const DefaultInfo: FC<UserInfoProps> = (
    {
        onClick,
        className = "",
    }) => {
    return (
        <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
            <DefaultAvatar/>
            <span className={styles.userName}>User name</span>
            <div className={styles.arrow}>{SVG_CONFIG.arrow}</div>
        </div>
    );
};

export default DefaultInfo;