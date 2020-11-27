import React, { useState } from 'react';
import Axios from 'axios';
import { UserCredentials } from './interfaces'
import './login.css'
import { useHistory } from 'react-router'
import { User } from '../user.interface'

interface LoginProps {
  loginUser(_user: User): void
}

function Login({ loginUser }: LoginProps) {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  } as UserCredentials);
  const [error, setError] = useState(null as string | null);
  const history = useHistory();

  const updateUserCredentials = (e: any) => {
    setUserCredentials({
      ...userCredentials, [e.target.name]: e.target.value
    })
  }

  const submit = async (e: any) => {
    e.preventDefault();
    const response = await Axios.post(`${process.env.REACT_APP_PROXY}/login`, userCredentials);
    if (response.data.success) {
      setError(null);
      loginUser(response.data.user);
      history.push('/dashboard');
    } else if (response.data.err) {
      setError(response.data.err);
    } else {
      setError('Incorrect credentials. Please try again.')
    }
  }

  return (
    <form className="login" onSubmit={submit}>
      { error && <p>{error}</p> }
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={updateUserCredentials}
        value={userCredentials.email}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={updateUserCredentials}
        value={userCredentials.password}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
