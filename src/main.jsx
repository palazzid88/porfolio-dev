import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqkJI81KHLTbtUQt9Pg495VamsZn9YIzM",
  authDomain: "porfolio-dev-9d88a.firebaseapp.com",
  projectId: "porfolio-dev-9d88a",
  storageBucket: "porfolio-dev-9d88a.appspot.com",
  messagingSenderId: "112783714313",
  appId: "1:112783714313:web:0f9499b6c11e5a1befb0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
