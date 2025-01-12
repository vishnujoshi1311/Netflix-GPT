// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArxu2frbnvDLgKAN4VR3gIEydRxng61iE",
  authDomain: "netflixgpt-ebce0.firebaseapp.com",
  projectId: "netflixgpt-ebce0",
  storageBucket: "netflixgpt-ebce0.firebasestorage.app",
  messagingSenderId: "656550569039",
  appId: "1:656550569039:web:315f7459d79766cfba363a",
  measurementId: "G-E7V32PRHHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();