import React from 'react';
import cloud from '../../assets/white-cloud.png'
import { Link } from 'react-router-dom';
import './navigation.css'

function Navigation() {
    return (
        <div className="nav-container">
            <h2>Weather.io</h2>
            <img src={cloud} alt="Weathr Logo" />
            <Link to='/'>Home</Link>
            <Link to='/chat'>Chat</Link>
            <Link to='/about_us'>About Us</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Navigation;
