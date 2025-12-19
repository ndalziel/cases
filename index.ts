// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdGNfuLgth5Zin_vzgKFcTEoKeQXoY6JA",
  authDomain: "consulting-cases.firebaseapp.com",
  projectId: "consulting-cases",
  storageBucket: "consulting-cases.firebasestorage.app",
  messagingSenderId: "1058051216724",
  appId: "1:1058051216724:web:c1464bcb6e961426b224c1",
  measurementId: "G-W8SL4ESGKW"
};

// Initialize Firebase
const firestoreApp = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth(firestoreApp);

const analytics = getAnalytics(firestoreApp);

export {auth, googleAuthProvider};