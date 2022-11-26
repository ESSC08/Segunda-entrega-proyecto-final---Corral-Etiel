// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf1nSvyjj0coRFM9hHju2Rzm0wocXShNk",
  authDomain: "proyecto---corral-etiel.firebaseapp.com",
  projectId: "proyecto---corral-etiel",
  storageBucket: "proyecto---corral-etiel.appspot.com",
  messagingSenderId: "976464357843",
  appId: "1:976464357843:web:3cbb89838f23c6f4a6e726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app