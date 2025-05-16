import React from "react";
import "./style.css";

const Weather = () => {
  return (
    <div className="weather">
      <div className="overlap-5">
        <div className="overlap-6">
          <img
            className="img"
            alt="Expansion icon"
            src="https://c.animaapp.com/kZX9QJ4w/img/expansion-icon-1.svg"
          />

          <img
            className="weather-icon"
            alt="Weather icon"
            src="https://c.animaapp.com/kZX9QJ4w/img/weather-icon.svg"
          />

          <div className="weather-topic">현재기온</div>
        </div>

        <div className="weather-data">3°C</div>
      </div>

      <div className="wind-speed">풍속</div>

      <div className="wind-volume">풍랑</div>
    </div>
  );
};
export default Weather;
