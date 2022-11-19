import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import MainWrapper from "./components/common/MainWrapper/MainWrapper";

function App() {
  return (
    <div className="App">
        <MainWrapper>
            <AppRouter/>
        </MainWrapper>
    </div>
  );
}

export default App;
