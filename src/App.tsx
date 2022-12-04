
import React, {FC, useEffect, useMemo} from 'react';

import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/common/Header/Header';
import MainWrapper from './components/common/MainWrapper/MainWrapper';


import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUserAction} from "./store/reducers/userReducer";
import {useLocation} from "react-router-dom";
import {Routes} from "./constants/routes";

const App: FC = () => {

    const dispatch = useDispatch();

import { setUserAction } from './store/reducers/userReducer';


    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUserAction({
                    email: user.email,
                    id: user.uid,
                    username: user.displayName,
                    photo: user.photoURL
                }))
            }
        });
    },)


    const { pathname } = useLocation()

    const hideHeader = useMemo(() => {
        switch (pathname) {
            case Routes["signIn"]:
            case Routes["signUp"]:
            case Routes["resetPassword"]:
            case Routes["resetPasswordSuccess"]:
            case Routes["resetPasswordEmail"]:
                return true

            default:
                return false
        }
    }, [pathname])

  return (
      <div className="App">
        <MainWrapper>
            {!hideHeader && <Header />}
            <AppRouter />
        </MainWrapper>
      </div>
  );
}

export default App;
