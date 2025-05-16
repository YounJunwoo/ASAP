import React from "react";
import "./style.css";

const Energy = () => {
  return (
    <div className="energy">
      <div className="enery-topic">현재 에너지 사용량</div>

      <div className="solar-topic">태양열 에너지 사용량</div>

      <div className="overlap-3">
        <div className="battery-topic">리튬 배터리 사용량</div>

        <img
          className="battery-icon"
          alt="Battery icon"
          src="https://c.animaapp.com/kZX9QJ4w/img/battery-icon.svg"
        />
      </div>

      <div className="used-solar-wrapper">
        <div className="used-solar" />
      </div>

      <div className="solar-data">48%</div>

      <div className="battery-data">70%</div>

      <div className="overlap-4">
        <img
          className="total-battery"
          alt="Total battery"
          src="https://c.animaapp.com/kZX9QJ4w/img/total-battery.svg"
        />

        <img
          className="used-battery"
          alt="Used battery"
          src="https://c.animaapp.com/kZX9QJ4w/img/used-battery.svg"
        />
      </div>

      <img
        className="solar-icon"
        alt="Solar icon"
        src="https://c.animaapp.com/kZX9QJ4w/img/solar-icon.svg"
      />
    </div>
  );
};
export default Energy;
