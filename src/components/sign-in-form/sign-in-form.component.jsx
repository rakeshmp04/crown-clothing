import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import './sign-in-form.style.scss';
import Button from "../button/button.component";

const defaultFormFields={
    email:'',
    password:'',
};


const SignInForm = () => {

    const [formFields, setformFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () =>{
        setformFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields(); 
        }
        catch (error){
           switch(error.code){
            case 'auth/wrong-password':
                alert('password does not match');
                break;
            case 'auth/user-not-found':
                alert('user not found');
                break;
            default:
                console.log(error);
           }
            
        }
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setformFields({...formFields, [name]: value});
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput
                label="Email" type="email" required onChange={handleChange} name='email' value={email}
                />

               <FormInput
                label="Password" type="password" required onChange={handleChange} name='password' value={password}
                />
                <div className='buttons-container'>
                <Button type="submit">Sign in</Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
               
            </form>
        </div>
        
    )
}

export default SignInForm;