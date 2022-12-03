import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, {FC, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/common/Header/Header';
import MainWrapper from './components/common/MainWrapper/MainWrapper';
import { setUserAction } from './store/reducers/userReducer';

const App: FC = () => {
  const dispatch = useDispatch();

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
  return (
      <div className="App">
        <MainWrapper>
          <Header />
          <AppRouter />
        </MainWrapper>
      </div>
  );
}

export default App;
