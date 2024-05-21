// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlMqZ0MYmOeZIWsFac-rxClkx2wY4eIj8",
  authDomain: "newblogg-39057.firebaseapp.com",
  projectId: "newblogg-39057",
  storageBucket: "newblogg-39057.appspot.com",
  messagingSenderId: "807606497951",
  appId: "1:807606497951:web:b34e204ae29f936c7568aa",
  measurementId: "G-3Q8JFM8XYC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
