import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields={
    name:'',
    email:'',
    password:'',
    confirmPassword:''
};


const SignUpForm = () => {

    const [formFields, setformFields] = useState(defaultFormFields);
    const {name, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setformFields({...formFields, [name]: value});
    };
    return (
        <div>
            <h1>login using email and password</h1>
            <form onSubmit={() => {}}>
                <label>Name</label>
                <input type="text" required onChange={handleChange} name='name' value={name}/>
                
                <label>Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email}/>
                
                <label>Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password}/>
                
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <button type="submit">Sign up</button>
            </form>
        </div>
        
    )
}

export default SignUpForm;