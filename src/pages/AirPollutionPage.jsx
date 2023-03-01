import React from "react";
import { Link } from "react-router-dom";

export default function AirPollutionPage(props) {

console.log(props.location.state)
  return (
    <div className="AirPollutionPage">
      <br />
      <br />
      <h2>Air Pollution</h2>
      <br />
      <Link to="/">Weather Forecast</Link>
    </div>
  );
}
