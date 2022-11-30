import React from "react";
import './weather.css'
function Weather() {
  return <div className="weather">
    <span className="title">
        Weather App
    </span>
    <br/>
    <form>
        <input type='text' name="city" placeholder="City"/>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input type="text" name="country" placeholder="Country"/>
        <button className="getweather">Submit</button>
    </form>
  </div>;
}

export default Weather;
