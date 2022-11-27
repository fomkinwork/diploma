import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {PUBLIC_ROUTES, PRIVATE_ROUTES} from "../../constants/routes";

const AppRouter: FC = () => {

    const isAuth = true;

    return (
        <Routes>
            {isAuth
                ?
                PRIVATE_ROUTES.map(
                    ({path, Element, title}) =>
                        <Route key={path} path={path} element={<Element title={title} />} />
                )
                :
                PUBLIC_ROUTES.map(
                    ({path, Element, title}) =>
                        <Route key={path} path={path} element={<Element title={title} />} />
                )
            }
            <Route path={"*"} element={<Navigate to={isAuth ? "/main" : "/signin"} replace />} />
        </Routes>
    );
};

export default AppRouter;