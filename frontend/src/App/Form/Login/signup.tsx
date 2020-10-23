import React, { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setNumber] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const updateForm = (e: any) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;

            case "Phone Number":
                setNumber(e.target.value);
                break;

            case "Password":
                setPassword(e.target.value);
                break;

            case "Password Confirm":
                setPasswordConfirm(e.target.value);
                break;

            case "First Name":
                setFirstname(e.target.value);
                break;

            case "Last Name":
                setLastname(e.target.value);
                break;
        }
    }

    const submitForm = (e: any) => {
        e.preventDefault();

        console.log('You submitted');
    }

    return (
        <form onSubmit={submitForm}>
            <input name="email" type="email" placeholder="Email Address" onChange={updateForm} value={email} />
            <input name="Phone Number" type="tel" placeholder="Phone Number" onChange={updateForm} value={phone_number} />
            <input name="Password" type="password" placeholder="Password" onChange={updateForm} value={password} />
            <input name="Password Confirm" type="password" placeholder="Password" onChange={updateForm} value={password_confirm} />
            <input name="First Name" type="text" placeholder="First Name" onChange={updateForm} value={firstname} />
            <input name="Last Name" type="text" placeholder="Last Name" onChange={updateForm} value={lastname} />

            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;