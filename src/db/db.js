import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPcIX9c8cKJeEEEAcAIsQDI0ZNFv_xIG4",
  authDomain: "proyecto-1-clase-fff0b.firebaseapp.com",
  projectId: "proyecto-1-clase-fff0b",
  storageBucket: "proyecto-1-clase-fff0b.firebasestorage.app",
  messagingSenderId: "293162278337",
  appId: "1:293162278337:web:8b08ad2f7a66c951292340",
  measurementId: "G-8750RE404K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;