import React, { Children, FC, MouseEventHandler } from "react";
import { WithChildren } from "../../../../types/withChildren";

export interface PostButtonProps {
    onClick?: MouseEventHandler,
    className?: string,
    icon?: string
}

const ContentPostButton: FC<PostButtonProps & WithChildren> = ({ onClick, className, icon, children }) => {
    return (
        <>
            <button
            onClick={onClick}
            className={className}
        >
            {!!icon && <img src={icon} alt="iconImage" />}
            {children}
        </button>
        </>
    )
} 

export default ContentPostButton;