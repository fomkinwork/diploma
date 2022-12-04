import React, {FC} from 'react';

import {WithChildren} from "../../../types/withChildren";
import Footer from '../Aside/Tabs/Footer/Footer';

import styles from "./MainWrapper.module.css";

const MainWrapper: FC<WithChildren> = ({children}) => {
    return (
            <main className={styles.containerWrapper}>
                {children}
            </main>
        );
};

export default MainWrapper;