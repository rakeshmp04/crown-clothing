import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import './sign-up-form.style.scss';
import Button from "../button/button.component";
import { UserContext  } from "../../contexts/user.context";

const defaultFormFields={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
};


const SignUpForm = () => {

    const [formFields, setformFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;

   const {setCurrentUser}=useContext(UserContext);

    const resetFormFields = () =>{
        setformFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password != confirmPassword){
            alert('password does not match');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            await createUserDocumentFromAuth(user, {name});
            resetFormFields();
        }

      
        catch (error){
            if(error.code = 'auth/email-already-in-use'){
                alert('cannot create user, email already in use!');
            }
            console.log('user creation encountered with an error', error);
        }
    };

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setformFields({...formFields, [name]: value});
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>login with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Name" type="text" required onChange={handleChange} name='name' value={name}
                />
                
                <FormInput
                label="Email" type="email" required onChange={handleChange} name='email' value={email}
                />

               <FormInput
                label="Password" type="password" required onChange={handleChange} name='password' value={password}
                />
                
                <FormInput
                label="Confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
        
    )
}

export default SignUpForm;