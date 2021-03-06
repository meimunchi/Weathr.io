import React, { useState } from 'react';
import Axios from 'axios';
import { LoginCredentials } from '../form.interface'
import '../form.css';
import { useHistory } from 'react-router'
import { User } from '../../user.interface'
import { Link } from 'react-router-dom'
import cloud from '../../../assets/cloud-logo.png'

interface LoginProps {
  loginUser(_user: User): void
}

function Login({ loginUser }: LoginProps) {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  } as LoginCredentials);
  const [error, setError] = useState(null as string | null);
  const history = useHistory();

  const updateUserCredentials = (e: any) => {
    setUserCredentials({
      ...userCredentials, [e.target.name]: e.target.value
    })
  }

  const submit = async (e: any) => {
    e.preventDefault()
    const response = await Axios.post(`${process.env.REACT_APP_PROXY}/login`, userCredentials, { withCredentials: true })
    if (response.data.success) {
      setError(null)
      loginUser(response.data.user)
      history.push('/dashboard')
    } else if (response.data.err) {
      setError(response.data.err)
      setTimeout(() => {
        setError(null)
      }, 3000)
    } else {
      setError('Incorrect credentials. Please try again.')
      setTimeout(() => {
        setError(null)
      }, 3000)
    }
  }

  return (
    <form className="login" onSubmit={submit}>
      <img src={cloud} alt="Weathr Logo" />
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
      <Link to='/signup'>Don't have an account. Sign up here!</Link>
    </form>
  );
}

export default Login;
