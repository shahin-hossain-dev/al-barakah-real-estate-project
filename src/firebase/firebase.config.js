// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMtIEbtcW2d_LuKpsQKkong1p-R1qRMPc",
  authDomain: "al-barakah.firebaseapp.com",
  projectId: "al-barakah",
  storageBucket: "al-barakah.appspot.com",
  messagingSenderId: "95828741284",
  appId: "1:95828741284:web:9f9fc3754bf6f154732a31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
