import { initializeApp } from 'firebase/app';
import { getAuth,
   signInWithPopup, 
   GoogleAuthProvider, 
   createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  signOut} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

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

  const provider=new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      
      }catch(error){
        console.log('error creating the user', error.message);
      }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth ,email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth ,email, password);
  };

  export const signOutUser = async () =>await signOut(auth);
  