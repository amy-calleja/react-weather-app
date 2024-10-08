import React, { useState, useEffect } from 'react'
import './Weather.css'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import DailyForecast from './DailyForecast'
import Loader from 'react-loader-spinner'

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
  const [weather, setWeather] = useState({ loaded: false })

  useEffect(() => {}, [props.coordinates])

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function updateCity(event) {
    setCity(event.target.value)
  }

  function search() {
    // old api:
    //const apiKey = 'a407ed3203878dbbce2748fb72810f52'
    //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const apiKey = '499f11ecbcdob7ab1a500t4761a0c233'
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayWeather)
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude
      let lon = position.coords.longitude

      //old api
      //let apiKey = 'a407ed3203878dbbce2748fb72810f52'
      //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

      const apiKey = '499f11ecbcdob7ab1a500t4761a0c233'
      let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`
      axios.get(apiUrl).then(displayWeather)
    })
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form className="search-bar" id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="Search a city"
            onChange={updateCity}
          />{' '}
          <span />
          <input type="submit" value="Go" id="go" />
          <button id="locationButton" coordinates={weather.coordinates} onClick={getLocation}>
            <i className="fas fa-thumbtack"></i> My Location
          </button>
        </form>

        <WeatherInfo info={weather} />
        <DailyForecast coordinates={weather.coordinates} city={city} />
      </div>
    )
  } else {
    search()
    return <Loader type="ThreeDots" color="#F2B68D" height={80} width={80} />
  }
}
