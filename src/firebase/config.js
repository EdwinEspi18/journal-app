import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIpusDV406YiRd020VCM-KSLUi7f8LTbI',
  authDomain: 'react-app-1cf19.firebaseapp.com',
  projectId: 'react-app-1cf19',
  storageBucket: 'react-app-1cf19.appspot.com',
  messagingSenderId: '499686534377',
  appId: '1:499686534377:web:5cc977b7d0100f4a27d478',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { app, db, googleAuthProvider };
