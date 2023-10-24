// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjCLX3Nw20bH3z96XPEalro75Qhn0I-Zs",
  authDomain: "debanjan-portfolio.firebaseapp.com",
  projectId: "debanjan-portfolio",
  storageBucket: "debanjan-portfolio.appspot.com",
  messagingSenderId: "921122128275",
  appId: "1:921122128275:web:1354b2fc91ecc43b7d2866",
  measurementId: "G-XFPDKPVCFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);