// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCLRDD7nfY0NqANTmNWQM_jAWqVFYLTqkU",
    authDomain: "rately-landing.firebaseapp.com",
    projectId: "rately-landing",
    storageBucket: "rately-landing.appspot.com",
    messagingSenderId: "443832689552",
    appId: "1:443832689552:web:99d40dad73c03a998fc915",
    measurementId: "G-0BVH5KW0WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);