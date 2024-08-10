
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDnH0zaJ7KE4GY2gr8Qh-CLblPjGTH3pwo",
  authDomain: "reactchat3.firebaseapp.com",
  projectId: "reactchat3",
  storageBucket: "reactchat3.appspot.com",
  messagingSenderId: "716504019568",
  appId: "1:716504019568:web:44a95b7ac155ff6bea3ab5"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore() 
export const storage = getStorage()


 