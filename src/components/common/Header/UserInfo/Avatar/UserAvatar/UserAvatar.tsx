import React from 'react';
// @ts-ignore
import styles from "../Avatar.module.css";

const UserAvatar = ({ url = "", alt = "", userName = "" }) => {
    const transformUserNameToAvatar = () => {
        return userName.split(" ").map(str => str.charAt(0).toUpperCase()).join("")
    }
    return (
        <div className={styles.avatar}>
            {!!url ? <img src={url} alt={alt} /> : <span className={styles.avatarLetters}>{transformUserNameToAvatar()}</span>}
        </div>
    );
};

export default UserAvatar;