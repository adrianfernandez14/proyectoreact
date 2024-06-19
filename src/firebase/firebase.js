// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJKmrt1l1ZXBB0vLZIBMX4HNN84nYXr60",
  authDomain: "proyectoreact-2d995.firebaseapp.com",
  projectId: "proyectoreact-2d995",
  storageBucket: "proyectoreact-2d995.appspot.com",
  messagingSenderId: "707211560249",
  appId: "1:707211560249:web:d2f705711eaf60d71014e8",
  measurementId: "G-JPS2E3SCB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);