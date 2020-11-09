import React, {useEffect, useState} from 'react';
import Axios from "axios";
import "./Dashboard.css"

function Dashboard() {
    const [weatherData, setWeatherData] = useState(null);

    const isPastTime = () => {
    const strNextUpdateTime = localStorage.getItem('next-update-time');
    if (!strNextUpdateTime) {
        return true;
    }

    const nextUpdateTime = parseInt(strNextUpdateTime);
    const now = new Date();
    const currTime = now.getTime();

    return (nextUpdateTime - currTime) < 0;
}

const nextUpdateTime = () => {
    const now = new Date();
    const nextUpdateTime = now.getTime() + 300000;  // In 5 minutes
    return nextUpdateTime.toString()
}

useEffect(() => {
    async function getWeatherData() {
        // TODO: Fix navigation.geolocation
        let body = {
            lat: 29.651634,
            long: -82.324829
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (location) => {
                body = {
                    lat: location.coords.latitude,
                    long: location.coords.longitude
                }
            })
        }
        const response = await Axios.post('http://localhost:5000/info', body);

        const resWeatherData = response.data;
        localStorage.setItem('weather-data', JSON.stringify(resWeatherData));
        setWeatherData(response.data);

        localStorage.setItem('next-update-time', nextUpdateTime());
    }

    const storedWeatherData = localStorage.getItem('weather-data')
    if (storedWeatherData && !isPastTime()) {
        setWeatherData(JSON.parse(storedWeatherData))
    } else {
        getWeatherData();
    }
  }, [])

    return(

      <div>

          <h1>Weather Dashboard</h1>
          <h2>7-Day Forecast</h2>

          {
              weatherData && <tr id={'day7forecast'}>
                  { weatherData.daily.map((day, index) =>
                          <th id={'day7elements'}>
                          <h3>Day {index+1}</h3>
                          <p>Max Temp: { day.temp.max}F</p>
                          <p>Min Temp: { day.temp.min}F</p>
                          <p>Chance of Rain: { day.pop * 100}%</p>
                          <p>Humidity: { day.humidity}%</p>
                          <p>Cloud Cover: { day.clouds}%</p>
                          <p>UV Index: { day.uvi} out of 10.0</p>
                          <p>Sunrise: { day.sunrise}</p>
                          <p>Sunset: { day.sunset}</p>

                          </th>
                      )}
              </tr>
          }
          <h2>48 Hour Hourly Forecast</h2>
          {
              weatherData && <tr id='hour48forecast'>
                  { weatherData.hourly.map((hour, index) =>
                      <th id={'hour48elements'}>
                          <p>Hour {index}:</p>
                          <p>Temperature: { hour.temp + 1}F</p>
                          <p>Chance of Rain: { (hour.pop * 100).toFixed(1)}%</p>
                      </th>


                  )}
              </tr>
          }
          <h2>Emergency Weather Information</h2>
          {
              weatherData && typeof weatherData.alerts != 'undefined' ?
                <p>Description: {weatherData.alerts.description}</p> :
                  <p>Alerts are not here.</p>

          }

      </div>
    )
}

export default Dashboard
