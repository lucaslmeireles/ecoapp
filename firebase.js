// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFireStore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ztVluYz_9tZrXygBRRb9O1LsFAsMTsY",
  authDomain: "eco-app-635de.firebaseapp.com",
  projectId: "eco-app-635de",
  storageBucket: "eco-app-635de.appspot.com",
  messagingSenderId: "286138916909",
  appId: "1:286138916909:web:dfb0c7e8352f30f72dd8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {auth}