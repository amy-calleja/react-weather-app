import axios from "axios";
import React from "react";
import AnimatedIcons from "./AnimatedIcons";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "a407ed3203878dbbce2748fb72810f52";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  console.log(props.coordinates);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Thu</div>
          <AnimatedIcons size={30} />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max">20°</span>
            <span className="DailyForecast-temp-min">12°</span>
          </div>
        </div>

        <div className="col">
          <div className="DailyForecast-day">Thu</div>
          <AnimatedIcons size={30} />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max">20°</span>
            <span className="DailyForecast-temp-min">12°</span>
          </div>
        </div>

        <div className="col">
          <div className="DailyForecast-day">Thu</div>
          <AnimatedIcons size={30} />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max">20°</span>
            <span className="DailyForecast-temp-min">12°</span>
          </div>
        </div>

        <div className="col">
          <div className="DailyForecast-day">Thu</div>
          <AnimatedIcons size={30} />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max">20°</span>
            <span className="DailyForecast-temp-min">12°</span>
          </div>
        </div>

        <div className="col">
          <div className="DailyForecast-day">Thu</div>
          <AnimatedIcons size={30} />
          <div className="DailyForecast-temps">
            <span className="DailyForecast-temp-max">20°</span>
            <span className="DailyForecast-temp-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
