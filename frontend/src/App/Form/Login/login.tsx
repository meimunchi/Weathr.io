import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateForm = (e: any) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;

            case "password":
                setPassword(e.target.value);
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
            <input name="password" type="password" placeholder="Password" onChange={updateForm} value={password} />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;