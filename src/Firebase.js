import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);
export default app;
