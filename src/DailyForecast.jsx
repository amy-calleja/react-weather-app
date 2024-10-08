import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './DailyForecast.css'
import DailyForecastDay from './DailyForecastDay'
import Loader from 'react-loader-spinner'
import PollutionForecast from './PollutionForecast'
import { Link } from 'react-router-dom'

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState('')
  let [pollution, setPollution] = useState({ loaded: false })

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function handleResponse(response) {
    setForecast(response.data.daily)
    searchPollution()
    setLoaded(true)
  }

  function searchForecast() {
    let latitude = props.coordinates.latitude
    let longitude = props.coordinates.longitude
    let city = props.city
    //let apiKey = 'a407ed3203878dbbce2748fb72810f52'
    //let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`
    let apiKey = '499f11ecbcdob7ab1a500t4761a0c233'
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  function handlePollution(response) {
    setPollution({
      loaded: true,
      data: response.data,
      aqi: response.data.list[0].main.aqi,
      co: response.data.list[0].components.co,
      no: response.data.list[0].components.no,
      no2: response.data.list[0].components.no2,
    })
  }

  function searchPollution() {
    let latitude = props.coordinates.latitude
    let longitude = props.coordinates.longitude
    let apiKey = 'a407ed3203878dbbce2748fb72810f52'
    let pollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    axios.get(pollutionUrl).then(handlePollution)
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <PollutionForecast pollution={pollution} />
        <div className="row">
          {forecast.map(function (forecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyForecastDay data={forecast} />
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
        {/* <Link to="/pollution-forecast" className="mt-3" style={{fontSize: "12px"}}>See Pollution Overview</Link>*/}
      </div>
    )
  } else {
    searchForecast()
    return <Loader type="ThreeDots" color="#F2B68D" height={80} width={80} />
  }
}
