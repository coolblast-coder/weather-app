import React from 'react'
import './displayweather.css'

function DisplayWeather(props) {
   console.log("props", props)
    const {data} = props;
  return (
    <div className='displayweather'>
        <div className='maincard'>
            <span className='cardtitle'>
                {data.name}, {data.sys.country}. Weather
            </span>
            <span className='cardsubtitle'>
                As of {new Date().toLocaleTimeString()}
            </span>
        </div>
    </div>
  )
  }

export default DisplayWeather