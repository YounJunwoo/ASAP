/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

const SoilDataChart = ({ className }) => {
  return (
    <div className={`soil-data-chart ${className}`}>
      <div className="overlap-group-2">
        <div className="temp-data">15</div>

        <div className="water-data">58</div>

        <div className="EC-data">1.4</div>

        <div className="p-h">7</div>

        <div className="soil-temperature">°C</div>

        <div className="water-unit">%</div>

        <div className="EC-unit">mmho/cm</div>
      </div>
    </div>
  );
};
export default SoilDataChart;