import React, {FC, useMemo} from 'react';
import {useLocation} from "react-router-dom";
import {PageProps} from "../../../types/page";
import {WithChildren} from "../../../types/withChildren";
import Aside from "../Aside/Aside";

import styles from "./PageWrapper.module.css"

const PageWrapper: FC<WithChildren> = ({children}) => {
    return (
        <div className={styles.pageWrapper}>
            <Aside/>
            {children}
        </div>
    );
};

export default PageWrapper;