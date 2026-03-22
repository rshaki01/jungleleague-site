// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQE4asrJGIZrlOc-Wu_0yGlzyv3PVYvhg",
  authDomain: "jungle-league.firebaseapp.com",
  projectId: "jungle-league",
  storageBucket: "jungle-league.firebasestorage.app",
  messagingSenderId: "118640766273",
  appId: "1:118640766273:web:378dabb30416b3b55e45c0",
  measurementId: "G-X6HHYV8XY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
