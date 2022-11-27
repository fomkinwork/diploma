import React, {FC, useMemo} from 'react';

import {WithChildren} from "../../../types/withChildren";

const PageWrapper: FC<WithChildren> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export default PageWrapper;