import React, { useState } from 'react';
import Axios from 'axios';
import { UserCredentials } from './user';

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  } as UserCredentials)

  const updateUserCredentials = (e: any) => {
    setUserCredentials({
      ...userCredentials, [e.target.name]: e.target.value
    })
  }

  const submit = async (e: any) => {
    e.preventDefault();
    const response = await Axios.post('http://localhost:5000/login', userCredentials);
    console.log(response.data);
  }

  return (
    <form onSubmit={submit}>
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={updateUserCredentials}
        value={userCredentials.email}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={updateUserCredentials}
        value={userCredentials.password}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
