import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="Weather">
      <form class="search-bar" id="search-form">
        <input
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search a city"
        />{" "}
        <span />
        <input type="submit" value="Go" id="go" />
        <button id="locationButton">
          <i class="fas fa-thumbtack"></i>My Location
        </button>
      </form>

      <h2>Sydney</h2>
      <p>10th November 2021</p>
      <div class="temperatures-display">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="Partly Cloudy"
        />
        <h1>20</h1>
        <span class="units">°C</span>
      </div>

      <h3>Clear Sky</h3>
      <div class="humidityWind">
        <div>Humidity: 80%</div>
        <div>Wind: 5km/h</div>
      </div>
      <div class="weather-forecast" id="forecast"></div>
    </div>
  );
}
