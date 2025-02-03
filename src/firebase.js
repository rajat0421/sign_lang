import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCoN8rNUTp9G3hxPyGw1f3BvINC9kPMaRQ",
  authDomain: "sign-language-93831.firebaseapp.com",
  projectId: "sign-language-93831",
  storageBucket: "sign-language-93831.firebasestorage.app",
  messagingSenderId: "73706388667",
  appId: "1:73706388667:web:335e5265132706ae05bd9e",
  measurementId: "G-K8PEV91QEY"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};

