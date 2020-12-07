import React, {useEffect, useState} from 'react';
import Axios from "axios";
import { User } from '../user.interface'
import "./dashboard.css"
import { WeatherData } from './weather-data.interface'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface DashboardProps {
    user: User | null
}

function Dashboard({ user }: DashboardProps) {
    const [weatherData, setWeatherData] = useState(null as null | WeatherData);

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

    // console.log(navigator.geolocation)

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
            const response = await Axios.post(`${process.env.REACT_APP_PROXY}/info`, body);
            const resWeatherData = response.data;
            //const res = await Axios.get(`${process.env.REACT_APP_PROXY}/precip`, body);
            //const precipmap = res;
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
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="http://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=10d61017ae8b2c417f4655c38368133d"
          />
          {/*<Marker position={[51.505, -0.09]}>*/}
          {/*  <Popup>*/}
          {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
          {/*  </Popup>*/}
          {/*</Marker>*/}
        </MapContainer>

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        <h1 id = {'heading'}>Weather Dashboard</h1>
        <h2 id = {'heading'}>Welcome Back, { user ? user.name : 'Guest'}</h2>
        <h2 id = {'heading'}>7-Day Forecast</h2>
        {
            weatherData && <tr id={'day7forecast'}>
                { weatherData.daily.map((day, index) =>
                        <th id={'day7elements'}>
                          <h3>Day {index+1}</h3>
                          <p>Max Temp: { (day.temp.max).toFixed(1)}F</p>
                          <p>Min Temp: { (day.temp.min).toFixed(1)}F</p>
                          <p>Chance of Rain: { (day.pop * 100).toFixed(1)}%</p>
                          <p>Humidity: { (day.humidity).toFixed(1)}%</p>
                          <p>Cloud Cover: { (day.clouds).toFixed(1)}%</p>
                          <p>UV Index: { (day.uvi).toFixed(1)} out of 10.0</p>
                          <p>Sunrise: { (day.sunrise)}</p>
                          <p>Sunset: { (day.sunset)}</p>
                        </th>
                    )}
            </tr>
        }
        <h2 id = {'heading'}>48 Hour Hourly Forecast</h2>
        {
            weatherData && <tr id='hour48forecast'>
                {weatherData.hourly.map((hour, index) =>
                    <th id={'hour48elements'}>
                        <p>Hour {index}:</p>
                        <p>Temperature: {(hour.temp).toFixed(1) + 1}F</p>
                        <p>Chance of Rain: {(hour.pop * 100).toFixed(1)}%</p>
                    </th>
                )}
            </tr>
        }
        <h2 id = {'heading'}>Emergency Weather Information</h2>
        {
            weatherData?.alerts ?
              <p>Description: {weatherData.alerts.description}</p> :
                <p>Alerts are not here.</p>
        }

     </div>
    )
}

export default Dashboard
