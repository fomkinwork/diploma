import React from 'react';
import {createContext} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

// import "firebase/auth"
// import "firebase/firestore"
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat';

// const firebaseConfig = {
//     apiKey: "AIzaSyA4Is_93jSjluDtoBUlC9WHbWEAkl116YI",
//     authDomain: "pixema-diploma.firebaseapp.com",
//     projectId: "pixema-diploma",
//     storageBucket: "pixema-diploma.appspot.com",
//     messagingSenderId: "640233642762",
//     appId: "1:640233642762:web:9f6d7826a1bb1d37a3b8f3",
//     measurementId: "G-DC6L0HWXF8"
// };

// const app = initializeApp(firebaseConfig);

export const Context = createContext(null || {})

// const auth = firebase.auth()
// const firestore = firebase.firestore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Context.Provider value={{
          }}>
              <App />
          </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>
);

