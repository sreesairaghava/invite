// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD38qQ0B2s6HgLzxWZlW5gJkpkJJAHklo0",
  authDomain: "saiwithmahi-life.firebaseapp.com",
  projectId: "saiwithmahi-life",
  storageBucket: "saiwithmahi-life.appspot.com",
  messagingSenderId: "576127686400",
  appId: "1:576127686400:web:b95d0a1ca2e4f1315105e5",
  measurementId: "G-KFDWS0LTNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export { analytics };