// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EfmgbBSTH4x_A9dFOdO4qQVm8Db54Ac",
  authDomain: "tori-606a9.firebaseapp.com",
  projectId: "tori-606a9",
  storageBucket: "tori-606a9.firebasestorage.app",
  messagingSenderId: "14422679953",
  appId: "1:14422679953:web:e1cc50d2974f240e6dfa30",
  measurementId: "G-LPKH2YZ13Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase Auth instance
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };