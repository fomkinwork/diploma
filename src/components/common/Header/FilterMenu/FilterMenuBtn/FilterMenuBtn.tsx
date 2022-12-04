import React, { FC, MouseEventHandler } from "react";

import { WithChildren } from "../../../../../types/withChildren";

export interface IFilterBtn {
    onClick: MouseEventHandler,
    className: string
}

const FilterMenuBtn: FC<IFilterBtn & WithChildren> = ({children, onClick, className}) => {
    return(
        <>
            <button
                onClick={onClick}
                className={className}
            >
                {children}
            </button>
        </>
    )
}

export default FilterMenuBtn;