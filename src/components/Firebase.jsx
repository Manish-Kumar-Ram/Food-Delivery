// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo-DK84n58ipKLmSMTBWWaCoK2ZuEgUiA",
  authDomain: "food-delivery-d06ba.firebaseapp.com",
  projectId: "food-delivery-d06ba",
  storageBucket: "food-delivery-d06ba.appspot.com",
  messagingSenderId: "68707932309",
  appId: "1:68707932309:web:60a81ee943293ae2e4639c",
  measurementId: "G-6ZYXV0QS7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app)