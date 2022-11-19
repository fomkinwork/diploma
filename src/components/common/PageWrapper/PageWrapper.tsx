import React, {FC, useMemo} from 'react';
import {useLocation} from "react-router-dom";

import {PageProps} from "../../../types/page";
import {WithChildren} from "../../../types/withChildren";

const PageWrapper: FC<WithChildren> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default PageWrapper;