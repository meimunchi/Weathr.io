import React, { useState } from 'react';
import { SignUpCredentials } from '../form.interface'
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios'
import '../form.css'
import { Link } from 'react-router-dom';
import cloud from '../../../assets/cloud-logo.png'
import { useHistory } from 'react-router'

function SignUp() {
    const [signUpForm, setSignUpForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirm: ""
    } as SignUpCredentials)

    const [error, setError] = useState(null as string | null);
    const history = useHistory();

    const updateSignUpForm = (e: any) => {
        setSignUpForm({
            ...signUpForm, [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        //how to check for valid email and phone number?
        if (validUserInfo(e)) {
            const signUpCredentials = {
                email: signUpForm.email,
                name: `${signUpForm.first_name} ${signUpForm.last_name}`,
                password: signUpForm.password,
                phone_num: signUpForm.phone_number,
                is_admin: false,
                user_id: uuidv4(),
            }
            const response = await Axios.post(`${process.env.REACT_APP_PROXY}/signup`, signUpCredentials);
            if (response.data.success) {
              history.push('/login')
            } else {
              setError(response.data.err)
              setTimeout(() => {
                setError(null)
              }, 3000)
            }
        }
    }

    const validUserInfo = (e: any) => {
        if (signUpForm.email === "" || signUpForm.first_name === "" || signUpForm.last_name === ""
            || signUpForm.password === "" || signUpForm.phone_number === "") {
            return false;
        }
        else if (signUpForm.password !== signUpForm.password_confirm) {
            setError('Passwords are not the same')
            return false;
        }
        return true;
    }

    return (
        <form className="login" onSubmit={submitForm}>
            <img src={cloud} alt="Weathr Logo" />
            { error && <p>{error}</p> }
            <input className="inputs"
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={updateSignUpForm}
                value={signUpForm.first_name}
                required/>
            <input className="inputs"
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={updateSignUpForm}
                value={signUpForm.last_name}
                required/>
            <input className="inputs"
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={updateSignUpForm}
                value={signUpForm.email}
                required/>
            <input className="inputs"
                name="phone_number"
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                onChange={updateSignUpForm}
                value={signUpForm.phone_number}
                required/>
            <input className="inputs"
                name="password"
                type="password"
                placeholder="Password"
                onChange={updateSignUpForm}
                value={signUpForm.password}
                required/>
            <input className="inputs"
                name="password_confirm"
                type="password"
                placeholder="Confirm Password"
                onChange={updateSignUpForm}
                value={signUpForm.password_confirm}
                required/>
            <button type="submit">Sign Up</button>
            <Link to='/login'>
                Already have an account? Login.
            </Link>
        </form>
    );
}

export default SignUp;
