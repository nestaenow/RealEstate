// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA53F752Jd8ywhn__hCr5-SjuCfXdcT7P4",
  authDomain: "estate-d7480.firebaseapp.com",
  projectId: "estate-d7480",
  storageBucket: "estate-d7480.appspot.com",
  messagingSenderId: "259194682785",
  appId: "1:259194682785:web:65da55887af377dc8a1fe0",
  measurementId: "G-TT9W35BKJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);