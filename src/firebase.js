// import firebase from 'firebase/app';
// import 'firebase/firestore';
//import { initializeApp } from "firebase/app";

 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi1_Qj2wVGSEfixDP8yrYO5Xp1yKp-P40",
  authDomain: "react-hooks-blog-40002.firebaseapp.com",
  projectId: "react-hooks-blog-40002",
  storageBucket: "react-hooks-blog-40002.appspot.com",
  messagingSenderId: "55641260735",
  appId: "1:55641260735:web:26aae08fa05f314bb6fc0a"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();