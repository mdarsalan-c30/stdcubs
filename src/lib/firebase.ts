
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4YZeG_t60GX_9EFfMZ9jFDCsLUHbnbz8",
  authDomain: "studycubs-official.firebaseapp.com",
  databaseURL: "https://studycubs-official-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studycubs-official",
  storageBucket: "studycubs-official.firebasestorage.app",
  messagingSenderId: "328675454729",
  appId: "1:328675454729:web:11ed5ab9607c0e4590edd8",
  measurementId: "G-EWPM4HZ7QP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
