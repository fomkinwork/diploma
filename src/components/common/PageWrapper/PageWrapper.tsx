import React, {FC, useMemo} from 'react';
import {useLocation} from "react-router-dom";
import {PageProps} from "../../../types/page";
import {WithChildren} from "../../../types/withChildren";
import Aside from "../Aside/Aside";

import styles from "./PageWrapper.module.css"
import Header from "../Header/Header";
import {useSelector} from "react-redux";
import {ThemeVariant} from "../../../store/reducers/themeReducer";

const PageWrapper: FC<WithChildren> = ({children}) => {

    // @ts-ignore
    const {theme} = useSelector(state => state.theme)

    return (
            <div className={`${styles.pageWrapper}
                ${theme === ThemeVariant.light ? styles.lightPageWrapper : styles.darkPageWrapper}`}>
                <Aside/>
                {children}
            </div>
    );
};

export default PageWrapper;