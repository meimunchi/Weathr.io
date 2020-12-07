import React from 'react';
import cloud from '../../assets/white-cloud.png'
import { Link } from 'react-router-dom';
import './navigation.css'
import { User } from '../user.interface'

interface LogoutUser {
  user: User | null
  logoutUser(): void
}

function Navigation({ user, logoutUser }: LogoutUser) {
    return (
      <div className="nav-container">
        <h2>Weathr.io</h2>
        <img src={cloud} alt="Weathr Logo" />
        <Link to='/'>Home</Link>
        <Link to='/chat'>Chat</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/blog'>Blogs</Link>
        { user && user.is_admin && <Link to='/blog-edit'>Blog Edit</Link> }
        <Link to='/dashboard'>Dashboard</Link>
        { !user && <Link to='/signup'>Signup</Link> }
        { !user && <Link to='/login'>Login</Link> }
        { user && <Link to='/' onClick={logoutUser}>Logout</Link> }
      </div>
    )
}

export default Navigation;
