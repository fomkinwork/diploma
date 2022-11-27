import React, {FC} from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import MainWrapper from './components/common/MainWrapper/MainWrapper';

const App: FC = () => {
  return (
      <div className="App">
        <MainWrapper>
          <AppRouter />
        </MainWrapper>
      </div>
  );
}

export default App;
