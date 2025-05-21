import React from "react";
import useWeather from '../../hooks/useWeather';
import "./Weather.css";

const CITY = "Gyeongsan"; 

const Weather = () => {
  const { weather } = useWeather(CITY);
  const temp = weather && weather.main ? `${Math.round(weather.main.temp)}°C` : "-";
  const wind = weather && weather.wind ? `${weather.wind.speed} m/s` : "-";

  return (

    <div className="overlap-5">
      <div className="overlap-6">
        <div className="weather-topic">현재기온</div>
        <div className="weather-info">
            <div className="city-temp-row">
              <span className="city-name">{CITY}</span>
              <span className="temperature">{temp}</span>
            </div>
            <span className="wind-speed-inline">풍속: {wind}</span>
          </div>
        </div>
      </div>
  );
};

export default Weather;