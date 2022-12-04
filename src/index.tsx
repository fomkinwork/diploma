import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {store} from "./store";
import {Provider} from "react-redux";

import './firebase';
import {ThemeProvider} from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <BrowserRouter>
              <Provider store={store}>
                  <App />
              </Provider>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);

