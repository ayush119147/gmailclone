import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN2gqiyoh4Sp7ILw-WwfPYwry_juBbUks",
  authDomain: "clone-ayush-6fd34.firebaseapp.com",
  projectId: "clone-ayush-6fd34",
  storageBucket: "clone-ayush-6fd34.firebasestorage.app",
  messagingSenderId: "701568379370",
  appId: "1:701568379370:web:6ad781e815e70fd1a4aa93",
  measurementId: "G-TC7TLKX4KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();