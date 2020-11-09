import React, {useEffect, useState} from 'react';
import Axios from "axios";


function Dashboard() {
    // const [weatherData, setWeatherData] = useState(null);

    // useEffect(
    //     () => {
    //         if () {
    //
    //         } else {
    //
    //         }
    //     }, [info]
    // )

    const loadData = async() => {
        const stringWeatherData = localStorage.getItem('weather-data')
        if (stringWeatherData) {
            return JSON.parse(stringWeatherData)
        } else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((location) => {
                        const body = {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }
                    })
                }

            const response = await Axios.post('http://localhost:5000/info', );
            console.log(response.data);
        }
    }

    const weatherData = loadData();

    return(
        <div>Hello</div>
    )
}

export default Dashboard
