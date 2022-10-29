// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD9HiIbEk4Eaf97dWvAP_Oi72hcnxPcYQE",
  authDomain: "react-netflix-clone-c0eae.firebaseapp.com",
  projectId: "react-netflix-clone-c0eae",
  storageBucket: "react-netflix-clone-c0eae.appspot.com",
  messagingSenderId: "879007651845",
  appId: "1:879007651845:web:4807b48963606eefb3e46c",
  measurementId: "G-EYMVRKQ0RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)