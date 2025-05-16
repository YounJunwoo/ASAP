import React from "react";
import SoilDataChart from '../../../../components/SoilDataChart/SoilDataChart'; // ✅
import "./style.css";

const Soil = () => {
  return (
    <div className="soil">
      <div className="soil-topic">
        <div className="text-wrapper">토양환경</div>
      </div>

      <SoilDataChart className="soil-data-chart-instance" />
      <div className="temperature">온도</div>

      <div className="water">수분</div>

      <div className="EC-label">EC</div>

      <div className="ph-label">pH</div>
    </div>
  );
};export default Soil;
