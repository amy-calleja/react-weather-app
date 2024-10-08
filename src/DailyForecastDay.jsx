import React from 'react'
import AnimatedIcons from './AnimatedIcons'

export default function DailyForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum)
    return `${temperature}`
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum)
    return `${temperature}`
  }

  function day() {
    let date = new Date(props.data.time * 1000)
    let day = date.getDay()
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return days[day]
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <AnimatedIcons size={30} code={props.data.condition.icon} />
      <div className="DailyForecast-temps">
        <span className="DailyForecast-temp-max">{maxTemp()}°</span>
        <span className="DailyForecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
  )
}
