import React, { useState } from 'react';
import Login from '../login'
import { SignUpForm } from '../interfaces'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'
import './signup.css'

function SignUp() {

    const [signUpForm, setSignUpForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirm: "",

    } as SignUpForm)

    const updateSignUpForm = (e: any) => {
        setSignUpForm({
            ...signUpForm, [e.target.name]: e.target.value
        })

    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        // error checking for each required field
        //how to check for valid email and phone number?
        if (validUserInfo(e)) {

            const signUpCredentials = {
                email: signUpForm.email,
                name: `${signUpForm.first_name} ${signUpForm.last_name}`,
                password: signUpForm.password,
                phone_num: signUpForm.phone_number,
                is_admin: false,
                user_id: uuidv4()
            }
            //const response = await Axios.post('http://localhost:5000/signup', signUpCredentials);
            //console.log(response.data);
            console.log(signUpCredentials)

        }
        else {
            console.log("Error from user information.")
        }
    }

    const validUserInfo = (e: any) => {
        let valid = true;
        // im not sure of a better way of doing this
        if (signUpForm.email == "" || signUpForm.first_name == "" || signUpForm.last_name == ""
            || signUpForm.password == "" || signUpForm.phone_number == "") {

            valid = false
        }

        else if (signUpForm.password != signUpForm.password_confirm) {
            valid = false
        }

        return valid
    }

    const sendToLogin = (e: any) => {
        console.log("Sent to new account page.")
    }

    return (
        <form onSubmit={submitForm}>

            <input className="input"
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={updateSignUpForm}
                value={signUpForm.first_name} />
            <br></br>

            <input className="input"
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={updateSignUpForm}
                value={signUpForm.last_name} />
            <br></br>

            <input className="input"
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={updateSignUpForm}
                value={signUpForm.email} />
            <br></br>

            <input className="input"
                name="phone_number"
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                onChange={updateSignUpForm}
                value={signUpForm.phone_number} />
            <br></br>

            <input className="input"
                name="password"
                type="password"
                placeholder="Password"
                onChange={updateSignUpForm}
                value={signUpForm.password} />
            <br></br>

            <input className="input"
                name="password_confirm"
                type="password"
                placeholder="Confirm Password"
                onChange={updateSignUpForm}
                value={signUpForm.password_confirm} />
            <br></br>

            <button className="signUp"
                type="submit">Sign Up</button>
            <br></br>

            <input className="login"
                type="button"
                value="Already have an account? Login."
                onClick={sendToLogin} />
            <br></br>

        </form>
    );
}

export default SignUp;