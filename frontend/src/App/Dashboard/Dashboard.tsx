import React, {useEffect, useState} from 'react';
import Axios from "axios";
import { User } from '../user.interface'

interface DashboardProps {
    user: User | null
}

function Dashboard({ user }: DashboardProps) {
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

    console.log(navigator.geolocation)

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
          <h2>48 Hour Hourly Forecast</h2>
          <h2>Welcome Back, { user ? user.name : 'Guest'}</h2>
          {
              weatherData && <div>
                  { weatherData.hourly.map(hour =>
                      <p>Temperature: { hour.temp }F</p>
                  )}
              </div>
          }
          <h2>7-Day Forecast</h2>

          {
              weatherData && <div>
                  { weatherData.daily.map((day, index) =>
                          <div>
                          <h3>Day {index+1}</h3>
                          <p>Max Temp: { day.temp.max}</p>
                          <p>Min Temp: { day.temp.min}</p>
                          <p>Chance of Rain: { day.pop * 100}%</p>
                          <p>Humidity: { day.humidity}%</p>
                          <p>Cloud Cover: { day.clouds}%</p>
                          </div>
                      )}
              </div>
          }

      </div>
    )
}

export default Dashboard
