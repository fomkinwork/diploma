import React, {FC} from 'react';
import Footer from './Footer/Footer';


import styles from "./Tabs.module.css";
import TabItem, {ITabItem, TabItemProps} from './TabsItem/TabItem';
import {useLocation, useNavigate} from "react-router-dom";

interface TabsProps {
    config: ITabItem[]
    onClick: any
}


const Tabs: FC<TabsProps & TabItemProps> = (
    {
        config= [],
        onClick = () => {},
        activeTabItem
    }) => {

    const navigate = useNavigate()
    const location = useLocation()


    return (
        <nav className={styles.tabs}>
            {config.map(tab => (
                <TabItem
                    activeTabItem={activeTabItem}
                    className={styles.tabItem}
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    onClick={() => onClick(tab.id)}
                    icon={tab.icon}
                />
            ))}
        </nav>
    );
};

export default Tabs;