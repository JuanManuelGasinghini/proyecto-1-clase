
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8N3wbpzzQpFHupp9BuBmr6H5ciYPtRrs",
  authDomain: "eccomerce-clase1.firebaseapp.com",
  projectId: "eccomerce-clase1",
  storageBucket: "eccomerce-clase1.firebasestorage.app",
  messagingSenderId: "225583057459",
  appId: "1:225583057459:web:18ef379a9d63e15e6a7146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;