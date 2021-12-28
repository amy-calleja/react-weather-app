import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "a407ed3203878dbbce2748fb72810f52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form className="search-bar" id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search a city"
            onChange={updateCity}
          />{" "}
          <span />
          <input type="submit" value="Go" id="go" />
          <button id="locationButton">
            <i className="fas fa-thumbtack"></i>My Location
          </button>
        </form>

        <WeatherInfo info={weather} />
      </div>
    );
  } else {
    search();
    return "Loading. . .";
  }
}
