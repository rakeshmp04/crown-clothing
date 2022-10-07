import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCkwMBoeS3KqcdX9FpuxoEGeaKKAmevNA",
    authDomain: "crown-clothing-4a36c.firebaseapp.com",
    projectId: "crown-clothing-4a36c",
    storageBucket: "crown-clothing-4a36c.appspot.com",
    messagingSenderId: "422465887555",
    appId: "1:422465887555:web:db2de769f691e125a463f6"
  };
  
  // Initialize Firebase
  const firebaseApp= initializeApp(firebaseConfig);