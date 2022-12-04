import React, {FC, MouseEventHandler} from 'react';
import styles from "./ThemeSwitcher.module.css";


interface IThemeSwitcher {
    condition?: boolean,
    onClick?: () => {}
}

const ThemeSwitcher:FC <IThemeSwitcher> = ({condition=true, onClick=()=>{}}) => {
    return (
        <div className={`
                ${styles.themeSwitcher}
                ${condition ? styles.activeThemeSwitcher : ""}
            `} onClick={onClick}>
            <div className={`
             
                ${condition ? styles.activeThemeSelector : styles.defaultThemeSelector}
            `}/>
        </div>
    );
};

export default ThemeSwitcher;
