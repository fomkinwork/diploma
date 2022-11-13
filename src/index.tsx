import React from 'react';
import {createContext} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA4Is_93jSjluDtoBUlC9WHbWEAkl116YI",
    authDomain: "pixema-diploma.firebaseapp.com",
    projectId: "pixema-diploma",
    storageBucket: "pixema-diploma.appspot.com",
    messagingSenderId: "640233642762",
    appId: "1:640233642762:web:9f6d7826a1bb1d37a3b8f3",
    measurementId: "G-DC6L0HWXF8"
};

firebase.initializeApp(firebaseConfig);

export const Context = createContext({})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Context.Provider value={{
              firebase,
              auth,
              firestore
          }}>
              <App />
          </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>
);

