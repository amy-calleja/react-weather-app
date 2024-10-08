import React from 'react'
import { ReactSkycon, SkyconType } from 'react-skycons-extended'

export default function AnimatedIcons(props) {
  const codeMapping = {
    'clear-sky-day': 'CLEAR_DAY',
    'clear-sky-night': 'CLEAR_NIGHT',
    'few-clouds-day': 'PARTLY_CLOUDY_DAY',
    'few-clouds-night': 'PARTLY_CLOUDY_NIGHT',
    'broken-clouds-day': 'PARTLY_CLOUDY_DAY',
    'broken-clouds-night': 'PARTLY_CLOUDY_NIGHT',
    'scattered-clouds-day': 'CLOUDY',
    'scattered-clouds-night': 'CLOUDY',
    'rain-day': 'RAIN',
    'rain-night': 'RAIN',
    'shower-rain-day': 'RAIN',
    'shower-rain-ngiht': 'RAIN',
    'thunderstorm-day': 'RAIN',
    'thunderstorm-night': 'RAIN',
    'snow-day': 'SNOW',
    'snow-night': 'SNOW',
    'mist-day': 'FOG',
    'mist-ngiht': 'FOG',
  }

  return (
    <div className="AnimatedIcons">
      <ReactSkycon
        icon={(SkyconType, codeMapping[props.code])}
        color="#F9F7CF"
        size={props.size}
        animate={true}
      />
    </div>
  )
}
