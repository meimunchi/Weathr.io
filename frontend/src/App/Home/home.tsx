import React, { useState } from 'react';
import './home.css'
import bigCloud from '../../assets/big-blue-cloud.png';

function Home() {
    return (
        <div className="greeting">
            <h2>Staying connected <br></br> in all weather!</h2>
            <p>Text us to receive real-time updates on storms and tips to keep safe</p>
            <p>Keep up to date on local weather and tips on one centralized platform!</p>
            <img src={bigCloud} alt="Weathr Logo" />

        </div>

    )

}

export default Home;
