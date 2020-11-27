import React, {useEffect, useState} from 'react';
import bigCloud from '../../assets/big-blue-cloud.png'
import './about.css'

function About(){
    return(
        <div className="greeting">
            <h2>About Us : The Golden Eagles</h2>
            <p>Inspired by the lack of quick access to important weather data,
                we aspired to create a website that would provide statistics such as 
                wind speed, natural disaster alerts, or just simply temperature from our
                website or our SMS service.
            </p>
            <img src={bigCloud} alt="Weathr Logo"/>
        </div>
    )
}

export default About;