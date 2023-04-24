// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVrAA3sRJ0PBlbgAnpEmJgdb1lPbTVu8",
  authDomain: "geotodosapp.firebaseapp.com",
  projectId: "geotodosapp",
  storageBucket: "geotodosapp.appspot.com",
  messagingSenderId: "716093370179",
  appId: "1:716093370179:web:9c908a801992208c4d89f6",
  measurementId: "G-4FB36K1XMC",
  databaseURL: "https://geotodosapp-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export const rtdb = getDatabase(app);