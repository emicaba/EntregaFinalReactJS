// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCIH3B6AcyWRbuKY5rt56_1owXmwp0ukQ",
  authDomain: "geatrader-7a8f3.firebaseapp.com",
  projectId: "geatrader-7a8f3",
  storageBucket: "geatrader-7a8f3.appspot.com",
  messagingSenderId: "168047092207",
  appId: "1:168047092207:web:8ebcdfa4014ce2f31ed61a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
