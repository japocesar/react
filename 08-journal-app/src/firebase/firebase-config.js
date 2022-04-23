import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import "firebase/firestore";
import "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyAjt4CAXPKDu793ClKMVOJQqD-fAxRJSXY",
    authDomain: "react-app-cursos-8f50d.firebaseapp.com",
    projectId: "react-app-cursos-8f50d",
    storageBucket: "react-app-cursos-8f50d.appspot.com",
    messagingSenderId: "746161611758",
    appId: "1:746161611758:web:ed683dfdc20ec2f772e4ff"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}