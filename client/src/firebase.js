// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-a3ee5.firebaseapp.com",
  projectId: "mern-auth-a3ee5",
  storageBucket: "mern-auth-a3ee5.appspot.com",
  messagingSenderId: "907127922524",
  appId: "1:907127922524:web:026bb2e66aaea013ac2b99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);