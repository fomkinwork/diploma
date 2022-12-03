import React, {FC, useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";

import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../../constants/routes";
import {useAuth} from "../../hooks/use-Auth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {setUserAction} from "../../store/reducers/userReducer";

// import {handleGetUser} from "../../store/asyncActions/userActions";

const AppRouter: FC = () => {
    const auth = getAuth();
    const dispatch = useDispatch();

    // @ts-ignore
    const { isAuth }: boolean = useSelector(state => state?.user);

    const getUser = async () => {
        await onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                dispatch(setUserAction({
                    email: user.email,
                    id: user.uid,
                    name: user.displayName
                }))
            } else {
                console.log('User not authenticated')
            }
        })
    }

    useEffect(() => {
        getUser()
    },[]);

    //Сначала юзера нет, потом появляется, нужно помудрить с асинхроном


    return (
            <Routes>
                {isAuth
                    ?
                    PRIVATE_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                    :
                    PUBLIC_ROUTES.map(({ path, Element, title}) => <Route key={path} path={path} element={<Element title={title} />} />)
                }
                <Route path={"*"} element={<Navigate to={"/main"} replace />} />
            </Routes>
    );
};

export default AppRouter;