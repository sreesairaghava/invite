// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM7SE6WQWuguwFVF-T8p0LPwH9VXOlW7k",
  authDomain: "saiwithmahi-eb0fe.firebaseapp.com",
  projectId: "saiwithmahi-eb0fe",
  storageBucket: "saiwithmahi-eb0fe.appspot.com",
  messagingSenderId: "800905036659",
  appId: "1:800905036659:web:06ba064f2f8193c88abb06",
  measurementId: "G-M1XRQDCZTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export { analytics };