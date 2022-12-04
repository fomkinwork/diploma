import React, {FC} from 'react';

import styles from './UserMenu.module.css'

import {Link} from "react-router-dom";
import {Routes} from "../../../../../constants/routes";

interface IUserMenu {
    onClick: ()=>void;
}

const UserMenu: FC <IUserMenu> = ({onClick}) => {
    return (
        <div className={styles.menuWrapper}>
            <Link className={styles.navigateButton} to={Routes.settings}>Edit profile</Link>
            <div className={styles.logOutButton} onClick={onClick}>Log Out</div>
        </div>

    );
};

export default UserMenu;
