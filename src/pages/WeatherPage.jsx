import React from "react";
import { Link } from "react-router-dom";
import Weather from "../Weather";

export default function WeatherPage() {
  return (
    <div>
      <Link to="/airpollutionPage">Pollution Overview</Link>
      <Link to="/">Home</Link>
      <Weather defaultCity="Milan" />
    </div>
  );
}
