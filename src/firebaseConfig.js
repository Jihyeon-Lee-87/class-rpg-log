// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo6yUl7tQN8-PEkJtyk7teYqb0hNP7RZ8",
  authDomain: "class-rpg-log-654b5.firebaseapp.com",
  projectId: "class-rpg-log-654b5",
  storageBucket: "class-rpg-log-654b5.firebasestorage.app",
  messagingSenderId: "510348336440",
  appId: "1:510348336440:web:0f7e73ad777ad22bde75cd",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Auth, Google Provider export
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
