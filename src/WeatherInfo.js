import React from "react";
import FormattedDate from "./FormattedDate";
import AnimatedIcons from "./AnimatedIcons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.info.city}</h2>
      <p>
        <FormattedDate date={props.info.date} />
      </p>

      <div className="temperatures-display">
        <AnimatedIcons
          code={props.info.icon}
          size={55}
          alt={props.info.description}
        />

        <h1>{props.info.temperature}</h1>

        <span className="units">°C</span>
      </div>
      <h3>{props.info.description}</h3>
      <div className="humidityWind">
        <div>Humidity: {props.info.humidity}%</div>
        <div>Wind: {props.info.wind}km/h</div>
      </div>
    </div>
  );
}
