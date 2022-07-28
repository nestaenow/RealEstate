import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCiHw5Y5wztmi0yIWRAI3iVS_H7Z6cdZ8A",
  authDomain: "estate-320ca.firebaseapp.com",
  projectId: "estate-320ca",
  storageBucket: "estate-320ca.appspot.com",
  messagingSenderId: "633337682631",
  appId: "1:633337682631:web:771d19ea3df3d5928bfce2",
  measurementId: "G-FHK4R68KLG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
