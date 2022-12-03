import React from 'react';

// @ts-ignore
import defaultAvatar from "../../../../../../assets/default_avatar.svg"

// @ts-ignore
import styles from "../Avatar.module.css"

const DefaultAvatar = () => {
    return (
        <div className={styles.defaultAvatar}>
            <img src={defaultAvatar} alt={defaultAvatar}/>
        </div>
    );
};

export default DefaultAvatar;