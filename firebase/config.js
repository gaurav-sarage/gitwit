// import { getFirestore } from 'firebase-admin/firestore';
// import serviceAccount from './bytebeatbrigade-bc30b076bbd6.json';

// console.log(serviceAccount)
// initializeApp();

// const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {

    apiKey: "AIzaSyAIyG82szNueaSvpIKh5AQAPGxoUkAEATo",

    authDomain: "bytebeatbrigade.firebaseapp.com",

    projectId: "bytebeatbrigade",

    storageBucket: "bytebeatbrigade.appspot.com",

    messagingSenderId: "324078715372",

    appId: "1:324078715372:web:34e5b34180113b1a90c0c9"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db
