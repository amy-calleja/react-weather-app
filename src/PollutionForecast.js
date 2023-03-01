import React from "react";

export default function PollutionForecast(props) {
let aqi = props.pollution.aqi;

const showAqi = () => {
if (aqi === 1) {
    return <h3 style={{fontWeight: "bold", color: "#0EF700"}}>Good</h3>
} else if (aqi === 2) {
        return <h3 style={{fontWeight: "bold", color: "#F7EE79"}}>Fair</h3>
    } else if (aqi === 3) {
        return <h3 style={{fontWeight: "bold", color: "#F29D00"}}>Moderate</h3>
    } else if (aqi === 4) {
        return <h3 style={{fontWeight: "bold", color: "#F74500"}}>Poor</h3>
    } else if (aqi === 5) {
        return <h3 style={{fontWeight: "bold", color: "#B4160E"}}>Very Poor</h3>
    }
}

  return (
    <div className="PollutionForecast mt-4 mb-4">
            <p>Air Quality Index:</p>{showAqi()}
    </div>
  );
}