import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCzQ2R1kJEzzNIWkCteVEXahiJ_I_Jy7ZI",
  authDomain: "task-tot.firebaseapp.com",
  projectId: "task-tot",
  storageBucket: "task-tot.appspot.com",
  messagingSenderId: "365390144148",
  appId: "1:365390144148:web:15e52a2eac74997e868a81",
  measurementId: "G-QHXZY7X7D9"
}
);

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore,
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
