import React, {FC} from 'react';


export interface ITabItem {
    id: number
    title: string
    className?: string
    icon?: string
}

interface TabItemProps extends ITabItem {
    onClick: any
}

const TabItem: FC<TabItemProps> = (
    {
        id,
        title= "",
        onClick,
        className, 
        icon
    }) => {

    const handleTabItemClick = () => onClick(id);

    return (
        <button
            onClick={handleTabItemClick}
            className={className}
        >
            <img src={icon} alt="iconImage" />
            {title}
        </button>
    );
};

export default TabItem;