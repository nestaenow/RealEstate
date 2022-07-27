import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyATtxcTjqvPB9ajGs-4aDQS7VbJQsNS-dw",
  authDomain: "estately-f9d5b.firebaseapp.com",
  projectId: "estately-f9d5b",
  storageBucket: "estately-f9d5b.appspot.com",
  messagingSenderId: "301897472325",
  appId: "1:301897472325:web:b759d54d2a7c941571462c",
  measurementId: "G-GQWG1FNG56"
};

const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
