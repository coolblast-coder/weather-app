import React from 'react'
import '../components/displayweather.css'

function DisplayWeather(props) {
   console.log("props", props)
    const {data} = props;
  return (
    <div className='displayWeather'>
        <div className='maincard'>
            <span className='cardtitle'>
                {data.name}, {data.sys.country}. Weather
            </span>
        </div>
    </div>
  )
}

export default DisplayWeather