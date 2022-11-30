import React, { useState } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";

function Weather() {
  const APIKEY = "397dc0d89b678bce374dbf99d8299265";

  const [form, setform] = useState({
    city: "",
    country: "",
  });

  const [weather, setWeather] = useState([]);

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setWeather({
        data: data,
      });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setform({ ...form, city: value });
    }

    if (name === "country") {
      setform({ ...form, country: value });
    }
    console.log(form.city, form.country);
  };

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
