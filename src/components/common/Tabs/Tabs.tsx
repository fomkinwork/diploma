import React, {FC} from 'react';
import Footer from './Footer/Footer';


import styles from "./Tabs.module.css";
import TabItem, { ITabItem } from './TabsItem/TabsItem';

interface TabsProps {
    config: ITabItem[]
    onClick: any
}

const Tabs: FC<TabsProps> = (
    {
        config= [],
        onClick = () => {}
    }) => {

    if (!Array.isArray(config)){
        return null
    }

    return (
        <div className={styles.tabs}>
            <div>
            {config.map(tab => (
                <TabItem
                    className={styles.tabItem}
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    onClick={onClick}
                    icon={tab.icon}
                />
            ))}
            </div>            
            <Footer/>
        </div>
    );
};

export default Tabs;