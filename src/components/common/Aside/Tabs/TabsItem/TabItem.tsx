import React, {FC, ReactComponentElement, ReactSVG, ReactSVGElement} from 'react';
import styles from './TabItem.module.css'

export interface ITabItem {
    id: number
    title: string
    className?: string
    icon?: any
}

export interface TabItemProps {
    activeTabItem: number
    onClick: any
}

const TabItem: FC<ITabItem & TabItemProps> = (
    {
        id,
        title= "",
        onClick,
        className, 
        icon,
        activeTabItem
    }) => {

    return (
        <li
            onClick={onClick}
            className={`${styles.tabItem} ${activeTabItem === id ? styles.active : ""}`}
        >
            {icon}
            {title}
        </li>
    );
};

export default TabItem;