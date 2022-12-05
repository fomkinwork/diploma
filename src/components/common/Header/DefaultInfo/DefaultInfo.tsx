import React, { FC } from 'react';

import styles from './DefaultInfo.module.css'

import {SVG_CONFIG} from "../../../../constants/svgConfig";
import DefaultAvatar from "../UserInfo/Avatar/DefaultAvatar/DefaultAvatar";
import { ThemeVariant, useTheme } from '../../../../context/ThemeContext';

interface UserInfoProps {
    onClick?: () => void;
    className?: string
}

const DefaultInfo: FC<UserInfoProps> = (
    {
        onClick,
        className = "",
    }) => {
        const {theme} = useTheme()
    return (
        <div className={`${styles.userInfoWrapper} ${className}`} onClick={onClick}>
            <DefaultAvatar/>
            <span className={`${styles.userName} ${theme === ThemeVariant.light ? styles.darkUserName : styles.userName}`}>User name</span>
            <div className={styles.arrow}>{SVG_CONFIG.arrow}</div>
        </div>
    );
};

export default DefaultInfo;