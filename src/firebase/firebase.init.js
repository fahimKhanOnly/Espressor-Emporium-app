// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4d7FzbDhlV_9Y-3ybaZSwaEZQvVjBG8k",
  authDomain: "espresso-emporium-99993.firebaseapp.com",
  projectId: "espresso-emporium-99993",
  storageBucket: "espresso-emporium-99993.firebasestorage.app",
  messagingSenderId: "439165549756",
  appId: "1:439165549756:web:3c541ec1c1079bf1d924b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
