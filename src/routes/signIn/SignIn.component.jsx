import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () =>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>This is sign in page</h1>
            <button onClick={logGoogleUser}>sign in with google</button>
        </div>
    )
}

export default SignIn;