import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="HomePage">
      <br />
      <br />
      <br />
      <h2>Smart Weather App</h2>
      <br />
      <br />
      <Link to="/weatherpage">
        <h3>Weather Forecast</h3>
      </Link>
      <Link to="/airpollutionpage">
        <h3>Pollution Overview</h3>
      </Link>
    </div>
  );
}
