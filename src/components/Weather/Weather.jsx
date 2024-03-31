import React, { useState } from "react";
import "./weather.css";
import clear_icon from "../assests/clear.png";
import cloud_icon from "../assests/cloud.png";
import drizzle_icon from "../assests/drizzle.png";
import humidity_icon from "../assests/humidity.png";
import rain_icon from "../assests/rain.png";
import search_icon from "../assests/search.png";
import snow_icon from "../assests/snow.png";
import wind_icon from "../assests/wind.png";
const Weather = () => {
  let apiKey = "4872786526f34d35bf1463615b0f1d9f";

  const [wicon, setWicon] = useState(cloud_icon)
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value == ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name; 
    
    if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n") {
      setWicon(clear_icon);
    }
    else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n") {
      setWicon(cloud_icon);
    }
    else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n") {
      setWicon(drizzle_icon);
    }
    else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n") {
      setWicon(cloud_icon);
    }
    else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n") {
      setWicon(rain_icon);
    }
    else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n") {
      setWicon(rain_icon);
    }
    else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n") {
      setWicon(snow_icon);
    }
    else {
      setWicon(clear_icon);
    }
  }
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={() => {search()}}>
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="cloud_icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="humidity_icon" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="wind_icon" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
