import React, { useState } from 'react';
import bigCloud from '../../../assets/big-blue-cloud.png'
import smallCloud from '../../../assets/small-blue-cloud.png'
import './home.css'

function Home() {
    return (
        <div className="greeting">
            <h2>Staying connected <br></br> in all weather!</h2>
            <img src={smallCloud} alt="small cloud" />
            <p>Text us to receive real-time updates on storms and tips to keep safe</p>
            <img src={smallCloud} alt="small cloud" />
            <p>Keep up to date on local weather and tips on one centralized platform!</p>
            <img src={bigCloud} alt="Weathr Logo" />

        </div>

    )

}

export default Home;