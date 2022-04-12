// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAew1nGLEmUQeVnBGiRzENGjOFr4cNi0v8",
    authDomain: "car-service-app-c80e1.firebaseapp.com",
    projectId: "car-service-app-c80e1",
    storageBucket: "car-service-app-c80e1.appspot.com",
    messagingSenderId: "188488028126",
    appId: "1:188488028126:web:98b774a33dfcaa2cd7d74f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;