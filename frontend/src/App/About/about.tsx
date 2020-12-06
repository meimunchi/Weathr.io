import React, { useEffect, useState } from 'react';
import bigCloud from '../../assets/big-blue-cloud.png'
import './about.css'
// import 'bootstrap/dist/css/bootstrap.css' // No need for node_modules


function About() {
    //Bootstrap used for the secondary div
    return (
    <div>
        <div className="greeting">
            <h2>About Us : The Golden Eagles</h2>
            <p>Inspired by the lack of quick access to important weather data,
            we aspired to create a website that would provide statistics such as
            wind speed, natural disaster alerts, or just simply temperature from our
            website or SMS service.
            </p>
            <img src={bigCloud} alt="Weathr Logo" />
        </div>

        <div className="container marketing">

            <div className="row">
                <div className="col-lg-4">
                    <img src="#" alt="John Dillon Headshot"></img>
                        <h2>John Dillon</h2>
                        <h5>Software Developer</h5>
                        <p> 3rd Year CS Major, Minor in Disabilities in Society <br></br>
                            Interests: SWE, Data Science, Machine Learning, AI, Quantum Computing <br></br>
                            Hobbies: Fitness, Getting Outdoors, Video Games <br></br>
                        </p>
                </div>

                <div className="col-lg-4">
                    <img src="#" alt="Tianrui Li Headshot"></img>
                        <h2>Tianrui Li</h2>
                        <h5>Software Developer</h5>
                        <p> 2nd Year CS Major, Minor in Electrical Engineering and Statistics<br></br>
                            Interests: Machine Learning, Cloud Computing, Cybersecurity, Quantum Computing<br></br>
                            Hobbies: Art, Martial Arts, Cooking, Watching Shows<br></br>
                        </p>
                </div>

                <div className="col-lg-4">
                    <img src="#" alt="Victoria Mei Headshot"></img>
                        <h2>Victoria Mei</h2>
                        <h5>Software Developer</h5>
                        <p> 2nd Year CS Major, Minor in Business Administration<br></br>
                            Interests: SWE, Machine Learning, Cloud Computing, Cybersecurity<br></br>
                            Hobbies: Dance, Art, Making Elaborately Delicious Food Like Dumplings etc.<br></br>
                        </p>
                </div>

            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img src="#" alt="Antoine Ferguson Headshot"></img>
                        <h2>Antoine Ferguson</h2>
                        <h5>Software Developer</h5>
                        <p>Filler</p>
                </div>

                <div className="col-lg-4">
                    <img src="#" alt = "Colin Adams Headshot"></img>
                    <h2>Colin Adams</h2>
                    <h5>Software Developer</h5>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras
                        mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh.</p>
                </div>

                <div className="col-lg-4">
                    <img src="#" alt="Grey Johnson Headshot"></img>
                    <h2>Grey Johnson</h2>
                    <h5>Project Advisor</h5>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
                        porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                        ut fermentum massa justo sit amet risus.</p>
                </div>

            </div>

        </div>
    </div>)
}

export default About;
