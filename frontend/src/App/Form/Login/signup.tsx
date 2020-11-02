import React, { useState } from 'react';
import { SignupForm } from './SignupForm'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'

function SignUp() {

    const [signupForm, setSignupForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirm: "",

    } as SignupForm)

    const submitForm = async (e: any) => {
        e.preventDefault();
        // check for equal passwords
        // error checking for each required field
        const signupCredentials = {
            email: signupForm.email,
            name: `${signupForm.first_name} ${signupForm.last_name}`,
            password: signupForm.password,
            phone_num: signupForm.phone_number,
            is_admin: false,
            user_id: uuidv4()
        }
        const response = await Axios.post('http://localhost:5000/signup', signupCredentials);
        console.log(response.data);
        console.log(signupCredentials)
    }

    const updateSignupForm = (e: any) => {
        setSignupForm({
            ...signupForm, [e.target.name]: e.target.value
        })

        console.log(e.target.name, ": ", e.target.value)
        console.log("email in signup form: ", signupForm.email)
        console.log("phone number in signup form: ", signupForm.phone_number)
    }

    const sendToLogin = (e: any) => {
        console.log("Sent to new account page.")
    }

    return (
        <form onSubmit={submitForm}>

            <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={updateSignupForm}
                value={signupForm.email} />

            <input
                name="phone_number"
                type="tel"
                placeholder="Phone Number"
                onChange={updateSignupForm}
                value={signupForm.phone_number} />

            <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={updateSignupForm}
                value={signupForm.password} />

            <input
                name="password_confirm"
                type="password"
                placeholder="Confirm Password"
                onChange={updateSignupForm}
                value={signupForm.password_confirm} />

            <input
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={updateSignupForm}
                value={signupForm.first_name} />

            <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={updateSignupForm}
                value={signupForm.last_name} />


            <button type="submit">Sign Up</button>

            <input type="button"
                value="Already have an account? Login."
                onClick={sendToLogin} />

        </form>
    );
}

export default SignUp;