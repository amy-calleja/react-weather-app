import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DailyForecast.css";
import DailyForecastDay from "./DailyForecastDay";
import Loader from "react-loader-spinner";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function searchForecast() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "a407ed3203878dbbce2748fb72810f52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecast.map(function (forecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecastDay data={forecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    searchForecast();
    return <Loader type="ThreeDots" color="#F2B68D" height={80} width={80} />;
    }
}
