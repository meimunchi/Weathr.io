import React from 'react';
import Login from './Login/login';
import './form.css';
import logo from './cloud logo.png'

function Form() {
    return (
        <div className="Form">
            <img src={logo} />
            < Login />
        </div>

    );
}

export default Form;