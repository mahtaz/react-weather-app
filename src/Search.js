import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [submit, setSubmit] = useState(false);
  let [temp, setTemp] = useState(null);
  let [pressure, setPressure] = useState(null);
  let [humidity, setHumidity] = useState(null);

  function handleResponse(response) {
    setTemp(response.data.main.temp);
    setPressure(response.data.main.pressure);
    setHumidity(response.data.main.humidity);

    // alert(info)
  }
  let info = [temp, pressure, humidity];

  function showWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=15b6ba0523386a8a73b38b2440a74dea`;
    axios.get(url).then(handleResponse);
    setSubmit(true);
  }
  function handleInput(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={showWeather}>
      <label>
        City:
        <input type="search" onChange={handleInput} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );

  if (submit) {
    return (
      <div>
        {form}
        <ul>
          {info.map(function (value, index) {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
