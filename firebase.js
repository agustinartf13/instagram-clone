// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD23uegyIEqTuapnMkqfEPIzx9ziiqYpw",
  authDomain: "instagram-clone-55188.firebaseapp.com",
  projectId: "instagram-clone-55188",
  storageBucket: "instagram-clone-55188.appspot.com",
  messagingSenderId: "1091375713585",
  appId: "1:1091375713585:web:e0bdd0c5ad45f0e3c4f410",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };