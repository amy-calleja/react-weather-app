import React from "react";

export default function PollutionForecast(props) {
let aqi = props.pollution.aqi;

const showAqi = () => {
if (aqi === 1) {
    return <h3 style={{fontWeight: "bold", color: "#9ff2b1"}}>Good</h3>
} else if (aqi === 2) {
        return <h3 style={{fontWeight: "bold", color: "#f2ed8e"}}>Fair</h3>
    } else if (aqi === 3) {
        return <h3 style={{fontWeight: "bold", color: "#f2c58e"}}>Moderate</h3>
    } else if (aqi === 4) {
        return <h3 style={{fontWeight: "bold", color: "#e89c9b"}}>Poor</h3>
    } else if (aqi === 5) {
        return <h3 style={{fontWeight: "bold", color: "#f29898"}}>Very Poor</h3>
    }
}

  return (
    <div className="PollutionForecast mt-4 mb-4">
            <p>Air Quality Index:</p>{showAqi()}
    </div>
  );
}