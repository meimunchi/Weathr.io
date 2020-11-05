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
            <a> Chat</a>
            <a> About Us</a>
            <a> Blog</a>
            <a> Dashboard</a>
            <Link to='/signup'> Signup</Link>
        </div>
    )
}

export default Navigation;