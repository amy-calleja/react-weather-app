import React from "react";
import { Link } from "react-router-dom";

export default function AirPollutionPage() {
  return (
    <div className="AirPollutionPage">
      <br />
      <br />
      <h2>Air Pollution</h2>
      <br />
      <Link to="/weatherpage">Weather Forecast</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
