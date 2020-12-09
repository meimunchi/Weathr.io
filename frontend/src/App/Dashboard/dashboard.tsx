import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { User } from '../user.interface'
import './dashboard.css'
import { WeatherData } from './weather-data.interface'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LocationCoords } from '../location-coords'
import L from 'leaflet'

// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png'
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


interface DashboardProps {
  user: User | null
}

function Dashboard({ user }: DashboardProps) {
  const [weatherData, setWeatherData] = useState(null as null | WeatherData)
  const [locationCoords, setLocationCoords] = useState(null as null | LocationCoords)

  const isPastTime = () => {
    const strNextUpdateTime = sessionStorage.getItem('next-update-time')
    if (!strNextUpdateTime) {
      return true
    }

    const nextUpdateTime = parseInt(strNextUpdateTime)
    const now = new Date()
    const currTime = now.getTime()

    return (nextUpdateTime - currTime) < 0
  }

  const nextUpdateTime = () => {
    const now = new Date()
    const nextUpdateTime = now.getTime() + 300000  // In 5 minutes
    return nextUpdateTime.toString()
  }

  if (!locationCoords) {
    navigator.geolocation.getCurrentPosition((location) => {
      setLocationCoords({
        lat: location.coords.latitude,
        long: location.coords.longitude
      })
    })
  }

  useEffect(() => {
    async function getWeatherData() {
      if (locationCoords) {
        const response = await Axios.post(`${process.env.REACT_APP_PROXY}/info`, {
          lat: locationCoords.lat,
          long: locationCoords.long
        })
        const resWeatherData = response.data
        //const res = await Axios.get(`${process.env.REACT_APP_PROXY}/precip`, body);
        //const precipmap = res;
        sessionStorage.setItem('weather-data', JSON.stringify(resWeatherData))
        setWeatherData(response.data)

        sessionStorage.setItem('next-update-time', nextUpdateTime())
      }
    }

    const storedWeatherData = sessionStorage.getItem('weather-data')
    if (storedWeatherData && !isPastTime()) {
      setWeatherData(JSON.parse(storedWeatherData))
    } else {
      getWeatherData();
    }
  }, [locationCoords])

  return (

    <div className='dash'>
      <h1 id={'heading'}>Weather Dashboard</h1>
      <h2 id={'heading'}>Welcome Back, {user ? user.name : 'Guest'}</h2>
      { !weatherData && <p>Please enable location in browser so we can provide you the best tailored information</p>}
      { locationCoords && weatherData && <div>
        <h2 id={'heading'}>Precipitation Map</h2>
        <MapContainer center={[locationCoords.lat, locationCoords.long]} zoom={6} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            url="http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=10d61017ae8b2c417f4655c38368133d"
          />
          <Marker position={[locationCoords.lat, locationCoords.long]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          </MapContainer>
            <h2 id={'heading'}>Temperature Map</h2>
            <MapContainer center={[locationCoords.lat, locationCoords.long]} zoom={6} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <TileLayer
                url="http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=10d61017ae8b2c417f4655c38368133d"
              />
              <Marker position={[locationCoords.lat, locationCoords.long]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
          </MapContainer>
        <h2 id={'heading'}>7-Day Forecast</h2>
        <div id={'day7forecast'}>
        <tr >
          {weatherData.daily.map((day, index) =>
            <th id='day7elements' key={`${day}-${index}`}>
              <h3>Day {index + 1}</h3>
              <p>Max Temp: {(day.temp.max).toFixed(1)}F</p>
              <p>Min Temp: {(day.temp.min).toFixed(1)}F</p>
              <p>Chance of Rain: {(day.pop * 100).toFixed(1)}%</p>
              <p>Humidity: {(day.humidity).toFixed(1)}%</p>
              <p>Cloud Cover: {(day.clouds).toFixed(1)}%</p>
              <p>UV Index: {(day.uvi).toFixed(1)} out of 10.0</p>
              <p>Sunrise: {(day.sunrise)}</p>
              <p>Sunset: {(day.sunset)}</p>
            </th>
          )}
        </tr>
          </div>

        <h2 id={'heading'}>48 Hour Hourly Forecast</h2>
        <div id={'scrollbar'}>
            <tr id='hour48forecast'>
              {weatherData.hourly.map((hour, index) =>
                <th id='hour48elements' key={`${hour}-${index}`}>
                  <p>Hour {index + 1}:</p>
                  <p>Temperature: {(hour.temp).toFixed(1) + 1}F</p>
                  <p>Chance of Rain: {(hour.pop * 100).toFixed(1)}%</p>
                </th>
              )}
            </tr>
        </div>
        <h2 id={'heading'}>Emergency Weather Information</h2>
        {
          weatherData.alerts ?
            <p>Description: {weatherData.alerts.description}</p> :
            <p>Alerts are not here.</p>
        }
      </div> }

    </div>
  )
}

export default Dashboard
