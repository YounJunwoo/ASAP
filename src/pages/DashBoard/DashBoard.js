import React from 'react';
import Actuator from './sections/Actuator/Actuator';
import Ai from './sections/Ai/Ai';
import Energy from './sections//Energy/Energy';
import Soil from './sections/Soil/Soil';
import UsageStatus from './sections/UsageStatus/UsageStatus';
import Weather from './sections/Weather/Weather';

import './style.css';

// 이름 수정: Dashboard → DashBoard
const DashBoard = () => {
  return (
    <div className="dashboard" data-model-id="38:787">
      <div className="div-3">
        <Soil />
        <div className="temperature-2">
          <div className="text-wrapper-31">23</div>
          <div className="text-wrapper-32">°C</div>
          <div className="text-wrapper-33">온도</div>
        </div>
        <div className="humidity">
          <div className="text-wrapper-32">%</div>
          <div className="text-wrapper-33">습도</div>
          <div className="text-wrapper-31">68</div>
        </div>
        <div className="co">
          <div className="topic">CO₂농도</div>
          <div className="text-wrapper-31">527</div>
          <div className="unit">ppm</div>
        </div>
        <div className="insolation">
          <div className="insolation-unit">kWh/㎡</div>
          <div className="insolation-topic">일사량</div>
          <div className="insolation-data">1.824</div>
        </div>
        <UsageStatus />
        <Actuator />
        <Energy />
        <Weather />
        <Ai />
      </div>
    </div>
  );
};

// 이름 통일
export default DashBoard;
